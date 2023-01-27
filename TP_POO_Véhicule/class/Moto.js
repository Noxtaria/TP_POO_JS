import Vehicule from "./Vehicule.js";

export default class Moto extends Vehicule {
    constructor(marque, modele, kilometrage, annee){
        super(marque, modele, kilometrage, annee);
    }

    display(){
        return `<b>Moto :</b> ` + super.display()
    }
}