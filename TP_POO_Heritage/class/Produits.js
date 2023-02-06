import MaisonMere from "./MaisonMere.js";

export default class Produits extends MaisonMere{
    constructor(titre, prix, description, stock){
        super(titre, prix, description);
        this.stock = stock;
    }
}