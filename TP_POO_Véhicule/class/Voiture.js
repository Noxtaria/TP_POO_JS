import Vehicule from "./Vehicule.js";

export default class Voiture extends Vehicule {
    constructor(marque, modele, kilometrage, annee, clim){
        super(marque, modele, kilometrage, annee);
        this.clim = clim;
    }

    display(){
        return `<p><b>Voiture : </b> ` + super.display() + ` - ${this.clim}</p>`
    }
}