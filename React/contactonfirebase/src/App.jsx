import { useRef, useState } from "react";
import ModalComponent from "./components/ModalComponent";
import { createPortal } from "react-dom";
import "./App.css";
import API_KEY from "./apiKey";
import ContactDisplay from "./components/ContactDisplay";

export const App = () => {
  const BASE_DB_URL =
    "https://m2i-auth-demo-fox-default-rtdb.europe-west1.firebasedatabase.app/";
  const [modalVisible, setModalVisible] = useState(false);
  const [isLogging, setIsLogging] = useState(true); // Ajouter cette variable d'état
  const [isRegistering, setIsRegistering] = useState(false); // Ajouter cette variable d'état
  const [isLogged, setIsLogged] = useState(false);

  const emailRef = useRef();
  const passwordRef = useRef();

  const submitFormHandler = async (event) => {
    event.preventDefault();

    let BASE_URL = "";

    // En fonction de si l'utilisateur se logue ou s'enregistre, l'endpoint API est différent
    if (isLogging) {
      BASE_URL = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`;
    } else {
      BASE_URL = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`;
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
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: emailRef.current.value,
          password: passwordRef.current.value,
          returnSecureToken: true,
        }),
      });

      // Si la réponse n'a pas comme code de retour un OK (200), alors on va envoyer une erreur
      if (!response.ok) {
        throw new Error("Il y a eu une erreur !");
      }

      // Si la réponse est concluante, il va nous falloir extraire les données de la réponse (le body). Pour ce faire, on utilise la méthode asynchrone .json()
      const data = await response.json();

      // Dans la réponse se trouve un token qui nous servira par la suite pour faire notre requêtes de gestion de la base de données Firestore. Pour le moment, l'endroit le plus utile où le stocker est le stockage local de notre navigateur
      localStorage.setItem("token", data.idToken);

      emailRef.current.value = "";
      passwordRef.current.value = "";

      setIsLogged(true);
      setModalVisible(false);
    } catch (error) {
      console.error(error.message);
    }
  };

  const logOutHandler = () => {
    localStorage.removeItem("token");
    setIsLogged(false);
  };

  return (
    <>

<header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <a href="#" className="navbar-brand">
              <i className="bi bi-globe2"></i> eContacts
            </a>
            <div id="libraryNavbar" className="collapse navbar-collapse">
              <div className="ms-auto me-2 navbar-item dropdown">
                <button
                  className="btn btn-info"
                  onClick={() => {
                    setIsRegistering(false); // Mettre à jour les variables d'état
                    setIsLogging(true);
                    isLogged ? logOutHandler() : setModalVisible(true);
                  }}
                >
                  {isLogged ? "Log Out" : "Connexion"}
                </button>
                <button
                  className="btn btn-info mx-2"
                  onClick={() => {
                    setIsRegistering(true); // Mettre à jour les variables d'état
                    setIsLogging(false);
                    isLogged ? logOutHandler() : setModalVisible(true);
                  }}
                >
                  {isLogged ? "" : "Register"}
                </button>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {modalVisible && // Utiliser les variables d'état pour afficher le bon formulaire
        createPortal(
          <ModalComponent closeModal={() => setModalVisible(false)}>
            <div className="d-flex justify-content-between align-items center">
              <h3>{isLogging ? "Sign In" : "Sign Up"}</h3>
              <button
                onClick={() => setModalVisible(false)}
                className="btn btn-outline-dark rounded-circle"
              >
                <i className="bi bi-x"></i>
              </button>
            </div>
            <hr />
            <form onSubmit={submitFormHandler}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email :{" "}
                </label>
                <input
                  type="text"
                  required
                  ref={emailRef}
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password :{" "}
                </label>
                <input
                  type="password"
                  required
                  ref={passwordRef}
                  className="form-control"
                />
              </div>
              <div className="text-end">
                <button
                  type="button"
                  className="btn btn-outline-info me-2"
                  onClick={() => setIsLogging(!isLogging)}
                >
                  Switch to {isLogging ? "Sign Up" : "Sign In"}
                </button>
                <button className="btn btn-primary">
                  {isLogging ? "Sign In" : "Sign Up"}
                </button>
              </div>
            </form>
          </ModalComponent>,
          document.getElementById("modal-root")
        )}
      <div className="container">
        <div className="row g-2 py-3">
          <div className="col">
            <div className="bg-dark text-light rounded p-3">
              <div className="d-flex justify-content-between align-items-center">
                <h1>Contacts</h1>
              </div>
              <hr />
              {contacts.length === 0 ? 
              <p>Il n'y a pas de contact dans la base de données !</p> :
              <ContactDisplay key={contacts.id} contact={contacts} />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;


          
  
    