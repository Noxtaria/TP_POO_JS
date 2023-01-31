import { Ihm } from "./class/Ihm.js";

const btnObtenirTicket = document.querySelector("#obtenir-ticket");
const btnPayer = document.querySelector("#payer");
const saisieImmatriculation = document.querySelector("#immatriculation");
const affichageResultat = document.querySelector("#result");

const ihm = new Ihm(saisieImmatriculation, affichageResultat);
