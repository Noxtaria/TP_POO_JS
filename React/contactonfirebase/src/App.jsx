import { useRef, useState } from 'react';
import './App.css';
import API_KEY from './apiKey';

function App() {

  const BASE_DB_URL = "https://m2i-auth-demo-fox-default-rtdb.europe-west1.firebasedatabase.app/"

  const [modalVisible, setModalVisible] = useState(false)

  const [isLogging, setIsLogging] = useState(false)

  const [isLogged, setIsLogged] = useState(false)

  const emailRef = useRef()
  const passwordRef = useRef()
  const nomRef = useRef()
  const prenomRef = useRef()
  const dateNaissanceRef = useRef()
  const ageRef = useRef()
  const phoneRef = useRef()
  const avatarRef = useRef()

  const [contacts, setContacts] = use([])

// Notre fonction d'envoie de formulaire ayant besoin d'un requêtage API, il nous faut utiliser une version asynchrone (async et await)
const submitFormHandler = async (event) => {
  event.preventDefault()

  let BASE_URL = ""

  // En fonction de si l'utilisateur se logue ou s'enregistre, l'endpoint API est différent
  if (isLogging) {
    BASE_URL = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`

  } else {
    BASE_URL = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`
  }

  try {

    /* 
      La requête est cependant la même, que l'on cible l'endpoint de connexion ou d'enregistrement
      Via l'utilisation de fetch, on peut envoyer une requête API.

      Pour utiliser fetch(), il faut passer deux paramètres : 
        - L'endpoint à requêter (une addresse URL idéalement en HTTPS)
        - La configuration de la requête qui se présente sous la forme d'un objet en plusieurs parties :
          - La méthode (par défaut GET)
          - Les headers (pour par exemple ajouter le type de document que l'on envoie)
          - Le corps (les données à envoyer à l'API pour qu'elle puisse les traiter et offrir une réponse appropriée)

    */
    const response = await fetch(BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body : JSON.stringify({
        email: emailRef.current.value,
        password: passwordRef.current.value,
        returnSecureToken: true
      })
    })

    // Si la réponse n'a pas comme code de retour un OK (200), alors on va envoyer une erreur
    if(!response.ok) {
      throw new Error("Il y a eu une erreur !")
    } 

    // Si la réponse est concluante, il va nous falloir extraire les données de la réponse (le body). Pour ce faire, on utilise la méthode asynchrone .json()
    const data = await response.json()
    
    // Dans la réponse se trouve un token qui nous servira par la suite pour faire notre requêtes de gestion de la base de données Firestore. Pour le moment, l'endroit le plus utile où le stocker est le stockage local de notre navigateur
    localStorage.setItem('token', data.idToken)

    emailRef.current.value = ""
    passwordRef.current.value = ""

    setIsLogged(true)
    setModalVisible(false)
  } catch (error) {
    console.error(error.message);
  }
}

/*
  Pour ajouter un TodoItem à notre base de données, il va encore une fois falloir faire une requête API.

  Cette requête API devra prendre en compte le bon endpoint, qui est simplement l'adresse URL de base de notre RealTime Database suivie du nom 
  du type d'élément que l'on chercher à ajouter. 

  Par exemple, pour ajouter des todoItems, on doit taper l'endpoint : 
    https://addresse-de-database.com/todoItem.json

  Il va nous falloir passer dans le body de notre requête une version stringifiée de notre objet.

  En retour de la requête POST (pour ajout), nous allons avoir un objet contenant un seul attribut : name. Cet attribut contient l'ID Firebase de notre élément ajouté. Il va nous falloir le manipuler pour synchroniser notre state avec notre database.
*/
const addTodoHandler = async (todoItem) => {
  console.log(todoItem)
  try {
    const token = localStorage.getItem('token')
    if (token) {
      const response = await fetch(`${BASE_DB_URL}todoItems.json?auth=${token}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body : JSON.stringify(todoItem)
      })

      if (!response.ok) {
        throw new Error("Il y a eu un problème !")
      }


    }
  } catch (error) {
    console.error(error.message);
  }
}

/*
  Pour avoir l'accès à nos todoItems, il faut faire une requête de type GET dans le but de récupérer les différents todos. 

  Cette requête n'a pas besoin d'authentification suite au paramétrage de notre projet Firebase. On peut donc envoyer une requête simplifiée sans paramètre de requête 'auth'

  Cependant, le fonctionnement de Firebase se basant sur le principe d'un objet JSON géant, il va nous falloir déplier les clés de notre objet pour ensuite transformer ces clés en objets ajouté à un tableau vierge. Ce tableau servira ensuite à être stocké dans la constante de state 'todos'.
*/

useEffect(() => {
}, [])





const logOutHandler = () => {
  localStorage.removeItem('token')
  setIsLogged(false)
}

return (
  <>
    {/* 
      Pour provoquer le placement d'un composant ou d'HTML à un autre endroit que là où l'on le déclare, il faut utiliser la fonction createPortal() importée de React DOM

      Cette fonction prend deux paramètres :
        - L'élément JSX à rendre (un parent et X enfants)
        - L'emplacement dans le DOM de notre page (le fichier index.html) où sera envoyé l'élément JSX
     */}
    {modalVisible && createPortal(<ModalComponent closeModal={() => setModalVisible(false)}>
      <div className="d-flex justify-content-between align-items center">
      <h3>{isLogging ? 'Sign In' : 'Sign Up'}</h3>
      <button onClick={() =>setModalVisible(false)} className="btn btn-outline-dark rounded-circle"><i className="bi bi-x"></i></button>
      </div>
      <hr />
      <form onSubmit={submitFormHandler}>
      <div className="mb-3">
          <label htmlFor="email" className="form-label">Email : </label>
          <input type="text" required ref={emailRef} className="form-control" />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password : </label>
          <input type="password" required ref={passwordRef} className="form-control" />
        </div>
        <div className="text-end">
          <button type="button" className="btn btn-outline-info me-2" onClick={() => setIsLogging(!isLogging)}>Switch to {isLogging ? 'Sign Up' : 'Sign In'}</button>
          <button className="btn btn-primary">{isLogging ? 'Sign In' : 'Sign Up'}</button>
        </div>
      </form>
    </ModalComponent>, document.getElementById("modal-root"))}
  <div className="container">
    <div className="row g-2 py-3">
      <div className="col-4">
        <div className="bg-dark text-light rounded p-3">
          <TodoItemForm addTodo={addTodoHandler} />
        </div>
      </div>
      <div className="col-8">
        <div className="bg-dark text-light rounded p-3">
          <div className="d-flex justify-content-between align-items-center">
          <h1>App</h1>
          <button className="btn btn-primary" onClick={() => isLogged ? logOutHandler() : setModalVisible(true)}>{isLogged ? 'Log Out' : 'Show Modal'}</button>
          </div>
          <hr />
          {todos.length === 0 ? 
            <p>Il n'y a pas de tâches dans la base de données !</p> : 
            sortedTodos().map(todo => <TodoItemDisplay key={todo.id} todo={todo} switchTodoStatus={switchTodoStatusHandler} deleteTodo={deleteTodoHandler} />)}
        </div>
      </div>
    </div>
  </div>
  </>
);
}


export default App;
