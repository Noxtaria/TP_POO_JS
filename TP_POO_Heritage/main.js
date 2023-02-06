import Ihm from "./class/Ihm.js";

const formulaire = document.querySelector("#form");
const resultProduit = document.querySelector("#resultProduit");
const resultService = document.querySelector("#resultService");

const ihm = new Ihm(resultProduit, resultService, formulaire);

ihm.demarrer();


const inputProduit = document.querySelector("#input-produit");
const inputService = document.querySelector("#input-service");

const choixPrestation = () => {
    if(inputProduit.checked) {
        inputProduit.classList.add("hidden");
    } else if (inputService.checked) {
        inputService.classList.add("hidden");
    };
}


choixPrestation();

