// import Contact from "./class/Contact.js"
const btnSubmit = document.querySelector("#button");
const tableData = document.querySelector("#data");

let contacts = [
  {
    title: "Mr",
    lastname: "WICK",
    firstname: "John",
    birthday: "21/12/1980",
    phone: "+(33)6 45 12 74",
    email: "jwick@gmail.com",
  },
  {
    title: "Mr",
    lastname: "PHIL",
    firstname: "Spencer",
    birthday: "14/04/1970",
    phone: "+(33)6 12 01 39",
    email: "philxbox@hotmail.com",
  },
  {
    title: "Mme",
    lastname: "LINE",
    firstname: "Marie",
    birthday: "10/06/1985",
    phone: "+(33)7 24 71 12",
    email: "mline@gmail.com",
  },
];
// console.table(contacts);

const listContact = () => {
  contacts.forEach((contact) => {
    tableData.innerHTML += `<tr>
        <td>${contact.title}</td>
        <td>${contact.lastname}</td>
        <td>${contact.firstname}</td>
        <td>${contact.birthday}</td>
        <td>${contact.phone}</td>
        <td>${contact.email}</td>
    </tr>
    `;
    // console.table(contact)
  });
};

btnSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  const newContact = {
    title: document.querySelector("#title-mr").value,
    // contactMmeTitle : document.querySelector("#title-mme"),
    lastname: document.querySelector("#lastname").value,
    firstname: document.querySelector("#firstname").value,
    birthday: document.querySelector("#birthday").value,
    phone: document.querySelector("#phone").value,
    email: document.querySelector("#email").value,
  };

  tableData.innerHTML = "";

  contacts.push(newContact);

  listContact();

  console.table(contacts);
});

console.table(contacts);

listContact();
