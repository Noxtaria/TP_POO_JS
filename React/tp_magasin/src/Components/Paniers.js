import "../panier.css";
import Produit from "./Produit";

export default class Panier extends Produit {
    constructor(props){
        super(props)
        this.state = {}
    }

    render(){
        const {titre, prix, description} = this.props.panier
        return(
            <>
                <div className="container-panier">
                <div className="box-panier">
                    <p>produit : {titre}</p>
                    <p>description : {description}</p>
                    <p>prix : {prix}</p>
                    <button>Retirer du panier</button>
                </div>
            </div>
            </>
        )
    }
}