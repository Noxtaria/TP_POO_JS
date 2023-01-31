import Vehicule from "./Véhicule.js";

export class Ihm {
    constructor(saisieImmatriculation, affichageResultat){
        this.vehicules = [];
        this.saisieImmatriculation = saisieImmatriculation;
        this.affichageResultat = affichageResultat;
    }

    ajouterVehicule(){
        const immatriculation = this.saisieImmatriculation.querySelector("#immatriculation").value;
        const vehicule = new Vehicule(immatriculation);
        this.vehicules.push(vehicule);
        console.table(vehicule);
    }

    
}