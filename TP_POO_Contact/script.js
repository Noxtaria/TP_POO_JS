// import Contact from "./class/Contact.js"
const btnSubmit = document.querySelector("#button");
const tableData = document.querySelector("#data");


let contacts = [
    {
        title : "Mr",
        lastname : "WICK",
        firstname : "John",
        birthday : "21/12/1980",
        phone : "+(33)6 45 12 74",
        email : "jwick@gmail.com"
    },
    {
        title : "Mr",
        lastname : "PHIL",
        firstname : "Spencer",
        birthday : "14/04/1970",
        phone : "+(33)6 12 01 39",
        email : "philxbox@hotmail.com"
    },
    {
        title : "Mme",
        lastname : "LINE",
        firstname : "Marie",
        birthday : "10/06/1985",
        phone : "+(33)7 24 71 12",
        email : "mline@gmail.com"
    }
]
// console.table(contacts);

let addContact = () => {
    contacts.forEach(contact => {
        tableData.innerHTML += `<tr>
        <td>${contact.title}</td>
        <td>${contact.lastname}</td>
        <td>${contact.firstname}</td>
        <td>${contact.birthday}</td>
        <td>${contact.phone}</td>
        <td>${contact.email}</td>
    </tr>
    `
    // console.table(contact)
    })
}


btnSubmit.addEventListener("click", (e) => {
    e.preventDefault();
    let contactMrTitle = document.querySelector("#title-mr").value;
    // let contactMmeTitle = document.querySelector("#title-mme");
    let contactLastname = document.querySelector("#lastname").value;
    let contactFirstname = document.querySelector("#firstname").value;
    let contactBirthday = document.querySelector("#birthday").value;
    let contactPhone = document.querySelector("#phone").value;
    let contactEmail = document.querySelector("#email").value;

    contacts.push({
        title : contactMrTitle,
        // title : contactMmeTitle,
        lastname : contactLastname,
        firstname : contactFirstname,
        birthday : contactBirthday,
        phone : contactPhone,
        email : contactEmail
    })

    console.table(contacts);
    addContact();

})

console.table(contacts);

addContact();