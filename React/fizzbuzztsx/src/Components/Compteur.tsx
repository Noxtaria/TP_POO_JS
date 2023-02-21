import { useEffect, useState } from "react"
import "./compteur.css"

interface Props {
    
}

const Compteur = (props: Props) => {

    const [compteur, setCompteur] = useState(0)

    const upMyValues = () => {
        setCompteur(
            compteur+1
        )
      }

    const downMyValues = () => {
        setCompteur(
            compteur-1
        )
      }

      useEffect(() => {
        if(compteur % 3 == 0){
            console.log("FIZZ")
        } if(compteur % 5 == 0) {
            console.log("BUZZ")
        } if(compteur % 15 == 0) {
            console.log("FIZZ BUZZ")
        } else {
            console.log("")
        }

        
      })


    return (
        <>
            <div className="container">
                <div>
                    <h1>FizzBuzz</h1>
                    <hr />
                    <div className="box-circle">
                        <div className="compteur">{compteur}</div>
                        <div className="button-select">
                            <button onClick={downMyValues}>-</button>
                            <button onClick={upMyValues}>+</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Compteur;