import Vehicule from "./Vehicule.js";

export default class Moto extends Vehicule {
    constructor(marque, modele, kilometrage, annee){
        super(marque, modele, kilometrage, annee);
    }

    display(){
        return `<p>Moto : ${this.marque} ${this.modele} ${this.kilometrage}km ${this.annee}</p>`
    }
}