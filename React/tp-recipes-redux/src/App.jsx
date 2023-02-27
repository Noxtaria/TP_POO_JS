import "./App.css";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import ModalComponent from "./components/shared/Modal";
import API_KEY from "./apiKey.js";
import { useDispatch, useSelector } from "react-redux";
import { setIsLoggedAction } from "./components/recipeList/RecipeListSlice";
import { RecipeContainerComponent } from "./components/recipeContainer/RecipeContainerComponent";

function App() {
  const dispatch = useDispatch();

  const isLogged = useSelector((state) => state.recipeList.isLogged);

  const [isLoggin, setIsLoggin] = useState(false);
  const [modalLoginStatus, setModalLoginStatus] = useState(false);

  const passwordRef = useRef();
  const emailRef = useRef();

  const formInputHandler = async (e) => {
    e.preventDefault();
    let BASE_URL =
      "https://m2i-demo-recipes-fox-default-rtdb.europe-west1.firebasedatabase.app/";
    if (isLoggin) {
      BASE_URL = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`;
    } else {
      BASE_URL = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`;
    }
    try {
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

      if (!response.ok) {
        throw new Error(
          `il a eu une erreur lors ${
            isLoggin ? "du Log In" : "de l'enregistrement"
          }`
        );
      }

      const data = await response.json();

      localStorage.setItem("token", data.idToken);

      emailRef.current.value = "";
      passwordRef.current.value = "";

      dispatch(setIsLoggedAction(true));
      setModalLoginStatus(false);
    } catch (error) {
      console.error(error.message);
    }
  };

  const modalLoginHandler = (entry = "") => {
    if (entry === "login") {
      setIsLoggin(true);
    } else {
      setIsLoggin(false);
    }
    setModalLoginStatus(true);
  };

  const LogOutHandler =()=>{
    dispatch(setIsLoggedAction(false))
    localStorage.setItem('token',"")
  }

  useEffect(() => {}, []);

  return (
    <>
      {modalLoginStatus &&
        createPortal(
          <ModalComponent>
            <form className="FormInput" onSubmit={formInputHandler}>
              <h2>{isLoggin ? "Log In" : "Register"}</h2>
              <hr />
              <label htmlFor="inputEmail">Email :</label>
              <input type="text" id="inputEmail" ref={emailRef} />
              <label htmlFor="inputPassword">Password :</label>
              <input type="password" id="inputPassword" ref={passwordRef} />
              <button className="btn btn-info ms-3">{isLoggin ? "Log In" : "Register"}</button>
            </form>
          </ModalComponent>,
          document.getElementById("modal-root")
        )}
      <div className="App">
        <header>
          <nav
            className="navbar navbar-expand-lg bg-body-tertiary"
            data-bs-theme="dark"
          >
            <div className="container-fluid">
              <span className="navbar-brand" style={{ cursor: "pointer" }}>
                <i className="bi bi-globe"></i> eRecipes
              </span>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarContacts"
                aria-controls="navbarContacts"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarContacts">
                {isLogged ? (
                  <button
                    className="ms-auto btn btn-secondary"
                    onClick={LogOutHandler}
                  >
                    Log out
                  </button>
                ) : (
                  <>
                    <button
                      className="ms-auto btn btn-outline-info"
                      onClick={() => modalLoginHandler("login")}
                    >
                      Log In
                    </button>
                    <button
                      className="ms-2 btn btn-primary"
                      onClick={modalLoginHandler}
                    >
                      Register
                    </button>
                  </>
                )}
              </div>
            </div>
          </nav>
        </header>
        <RecipeContainerComponent/>
      </div>
    </>
  );
}

export default App;
