import { useState } from "react";


const Compteur = (props) => {
    
    const [compteur, setCompteur]=useState(props.startValue)

    return (
        <>
        <p>{compteur}</p>
        </>
    )
}

export default Compteur;