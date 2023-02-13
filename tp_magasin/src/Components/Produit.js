import { Component } from "react"
import "../produit.css"

export default class Produit extends Component {
    constructor(props){
        super(props)
        this.state = {}
    }

    render(){
        const {titre, prix, description} = this.props.produit

        return(
            <>
            <div className="container-produit">
                <div className="box-produit">
                    <p>produit : {titre}</p>
                    <p>description : {description}</p>
                    <p>prix : {prix}</p>
                    <button>Ajouter au panier</button>
                </div>
            </div>
            </>
        )
    }
}