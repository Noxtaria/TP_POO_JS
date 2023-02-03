import Dog from "./assets/class/Chien.js"

const chiens = [
    new Dog("https://www.radiofrance.fr/s3/cruiser-production/2022/12/7a515d8f-1886-43fd-a31f-083ba49fc8ac/870x489_gettyimages-696689986.jpg", "DogFaceA", "Face de la truffe d'un chien"),
    new Dog("https://cdn.paris.fr/paris/2022/09/22/huge-cbc96b18e52588cbd2671b42e52b10a5.jpg", "DogFaceB", "Face de la tête d'un chien")
]


const affichageListeChiens = () => {
    let ListChiens = document.querySelector('#listDogs') as HTMLDivElement
    chiens.forEach(chien => {
        ListChiens.innerHTML += `<button class="btn btn-light p-2 px-4 my-2">${chien.imgTitle}</button>`
    })
    
}

affichageListeChiens();