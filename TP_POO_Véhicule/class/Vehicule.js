export default class Vehicule {
    constructor(marque, modele, kilometrage, annee){
        this.marque = marque;
        this.modele = modele;
        this.kilometrage = kilometrage;
        this.annee = annee;
    }

    display(){
        return `<span>${this.marque} - ${this.modele} - ${this.kilometrage.toFixed(3)}km - ${this.annee}</span>`
    }
}