import Produits from "./Produits.js";
import Services from "./Services.js";

export default class Ihm {
    constructor(tableauHtmlResultatProduit, tableauHtmlResultatServices, formulaire){
        this.produits = [];
        this.services = [];
        this.formulaire = formulaire;
        this.tableauHtmlResultatProduit = tableauHtmlResultatProduit;
        this.tableauHtmlResultatServices = tableauHtmlResultatServices;
    }

    demarrer(){
        this.formulaire.addEventListener("submit",(e) => {
            e.preventDefault();
            this.ajouterProduit();
            this.ajouterService();
        })
    }
    
    ajouterProduit(){
        const titre = this.formulaire.querySelector("input[name='titre']").value
        const prix = this.formulaire.querySelector("input[name='prix']").value
        const description = this.formulaire.querySelector("input[name='description']").value
        const stock = this.formulaire.querySelector("input[name='stock']").value
        const produit = new Produits(titre,prix,description,stock);
        this.produits.push(produit)
        this.afficherProduit(produit)
    }
    
    afficherProduit(p){
        this.tableauHtmlResultatProduit.innerHTML += `<tr>
        <td>${p.titre}</td>
        <td>${p.prix}</td>
        <td>${p.description}</td>
        <td>${p.stock}</td>
        `
    }
    
    ajouterService(){
        const titre = this.formulaire.querySelector("input[name='titre']").value
        const prix = this.formulaire.querySelector("input[name='prix']").value
        const description = this.formulaire.querySelector("input[name='description']").value
        const domaine = this.formulaire.querySelector("input[name='domaine']").value
        const service = new Services(titre,prix,description,domaine);
        this.services.push(service)
        this.afficherService(service)
    }
    
    afficherService(s){
        this.tableauHtmlResultatServices.innerHTML += `<tr>
        <td>${s.titre}</td>
        <td>${s.prix}</td>
        <td>${s.description}</td>
        <td>${s.domaine}</td>
        `
    }
}