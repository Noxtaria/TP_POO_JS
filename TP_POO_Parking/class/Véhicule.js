export default class Vehicule {
  constructor(immatriculation) {
    (this.immatriculation = immatriculation);
  }

  display() {
    return `<span>${this.marque} - ${this.modele} - ${this.kilometrage}km - ${this.annee} - ${this.immatriculation}</span>`
  }


}

const btnObtenirTicket = document.querySelector("#obtenir-ticket");
const btnPayer = document.querySelector("#payer");
const immatriculation = document.querySelector("#immatriculation");
const affichageResultat = document.querySelector("#result");

let heureEntree;

btnObtenirTicket.addEventListener("click", (e) => {
  e.preventDefault();
  heureEntree = new Date();
  affichageResultat.innerHTML = "Vous pouvez récupérer votre ticket.";
});

btnPayer.addEventListener("click", () => {
  const immatriculationSaisie = immatriculation.value;
 
  if (!immatriculationSaisie) {
    affichageResultat.innerHTML = "Veuillez saisir votre plaque d'immatriculation.";
    return;
  }
  const heureSortie = new Date();
  const dureeStationnement = (heureSortie - heureEntree) / 1000;
  let prix;
  if (dureeStationnement <= 15) {
    prix = 0.8;
  } else if (dureeStationnement <= 30) {
    prix = 1.3;
  } else if (dureeStationnement <= 45) {
    prix = 1.7;
  } else {
    prix = 6;
  }
  affichageResultat.innerHTML = `Le tarif pour votre stationnement est de ${prix}€.`;
});


