import Contact from "./class/Contact.js"
const titleMr = document.querySelector("#title-mr");
const titleMme = document.querySelector("#title-mme");
const btnSubmit = document.querySelector("#button");
const tableData = document.querySelector("#data");


let contacts = [
    new Contact("Mr", "WICK", "John", "21/12/1980", "+(33)6 45 12 74", "jwick@gmail.com"),
    new Contact("Mr", "PHIL", "Spencer", "14/04/1970", "+(33)6 12 01 39", "philxbox@hotmail.com"),
    new Contact("Mme", "LINE", "Marie", "10/06/1985", "+(33)7 24 71 12", "mline@gmail.com")
]


const listContact = () => {
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
    })
}

btnSubmit.addEventListener("click", (e) => {
    e.preventDefault();
    let title = "";
    if(titleMr.checked) {
        title = titleMr.value;
    } else if (titleMme.checked) {
        title = titleMme.value;
    };
    let newContact = new Contact(
      title,
      document.querySelector("#lastname").value,
      document.querySelector("#firstname").value,
      document.querySelector("#birthday").value,
      document.querySelector("#phone").value,
      document.querySelector("#email").value
    );

    tableData.innerHTML = "";
    contacts.push(newContact);
    listContact();
    console.table(contacts);

})

console.table(contacts);
listContact();

// let contacts = [
//   {
//     title: "Mr",
//     lastname: "WICK",
//     firstname: "John",
//     birthday: "21/12/1980",
//     phone: "+(33)6 45 12 74",
//     email: "jwick@gmail.com",
//   },
//   {
//     title: "Mr",
//     lastname: "PHIL",
//     firstname: "Spencer",
//     birthday: "14/04/1970",
//     phone: "+(33)6 12 01 39",
//     email: "philxbox@hotmail.com",
//   },
//   {
//     title: "Mme",
//     lastname: "LINE",
//     firstname: "Marie",
//     birthday: "10/06/1985",
//     phone: "+(33)7 24 71 12",
//     email: "mline@gmail.com",
//   },
// ];
// // console.table(contacts);

// const listContact = () => {
//   contacts.forEach((contact) => {
//     tableData.innerHTML += `<tr>
//         <td>${contact.title}</td>
//         <td>${contact.lastname}</td>
//         <td>${contact.firstname}</td>
//         <td>${contact.birthday}</td>
//         <td>${contact.phone}</td>
//         <td>${contact.email}</td>
//     </tr>
//     `;
//     // console.table(contact)
//   });
// };

// btnSubmit.addEventListener("click", (e) => {
//   e.preventDefault();
//   const newContact = {
//     title: document.querySelector("#title-mr").value,
//     // contactMmeTitle : document.querySelector("#title-mme"),
//     lastname: document.querySelector("#lastname").value,
//     firstname: document.querySelector("#firstname").value,
//     birthday: document.querySelector("#birthday").value,
//     phone: document.querySelector("#phone").value,
//     email: document.querySelector("#email").value,
//   };

//   tableData.innerHTML = "";

//   contacts.push(newContact);

//   listContact();

//   console.table(contacts);
// });

// console.table(contacts);

// listContact();
