import { useRef } from "react";
import { useState } from "react";
import Compteur from "./Compteur";
import "./compteur.css";

const Main = () => {
  const numberValueRef = useRef();
  const [tabCompteurValue, setTabCompteurValue] = useState([])

  const formSubmit = (e) => {
    e.preventDefault();
    setTabCompteurValue((previousState => [...previousState, +numberValueRef.current.value]))
    
    
  };
  
  console.log(tabCompteurValue)
  return (
    <>
      <div className="container">
        <h1>Compteur</h1>
        <hr />
        <form onSubmit={formSubmit}>
          <label htmlFor="numberValue">Start value:</label>
          <div>
            <input
              type="number"
              placeholder="Entrer un nombre"
              ref={numberValueRef}
              required
            />
          </div>
          <button>Add a Counter</button>
        </form>
        <h2>Counters</h2>
        <hr />
        <div className="box-counters">
          {/* <span>Please add a counter</span> */}
          {tabCompteurValue.map((value, index) => <Compteur key={index} startValue={value}/>)}
        </div>
      </div>
    </>
  );
};

export default Main;
