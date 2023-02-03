import Tache from "./class/Tache.js"

const btn = document.querySelector("#btn-valider");
const inputRecherche = document.querySelector("#searchInput");
const btnRecherche = document.querySelector("#searchButton");
const tableData = document.querySelector("#data");
const btnTrash = document.querySelector("#btn-trash");
let id = 1 ;
let taches = []

const listTache = () => {
    taches.forEach(tache => {
        tableData.innerHTML += `<tr>
        <td>${tache._id}</td>
        <td>${tache.titre}</td>
        <td>${tache.contenu}</td>
        <td>
            <button class="bi bi-trash btn btn-danger" id="btn-trash"></button> 
            <button class="bi bi-clock btn btn-warning" onclick="changeClass()" id="btn-clock"></button> 
        </td>
    </tr>
    `
    })
}

btn.addEventListener("click", (e) => {
    e.preventDefault();
    let newTache = new Tache(
        id.toString(),
        document.querySelector("#title").value,
        document.querySelector("#content").value,
        id++,
    );

    tableData.innerHTML = "";
    taches.push(newTache);
    listTache();
})

const changeClass = () => {
    document.querySelector("#btn-clock").className = "bi bi-done btn btn-success"
}


listTache();
