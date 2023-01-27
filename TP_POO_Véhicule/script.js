import Voiture from "./class/Voiture.js";
import Moto from "./class/Moto.js";

const affichage = document.querySelector("#result");

affichage.innerHTML += `<h1>TRAVAUX PRATIQUE POO - HERITAGE - Class Véhicule</h1><hr>`;

let voiture = new Voiture("Renault", "Kangoo", 240, 2003, "Climatisée");
let moto = new Moto("BMW", "R1150R Rockster", 65, 2005);

affichage.innerHTML += voiture.display();
affichage.innerHTML += moto.display();