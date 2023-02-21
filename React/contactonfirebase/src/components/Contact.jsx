import { PureComponent } from "react";

export class Contact extends PureComponent {
    constructor(nom, prenom, dateNaissance, age, email, phone, avatar){
        this.nom = nom
        this.prenom = prenom
        this.dateNaissance = dateNaissance
        this.age = age
        this.email = email
        this.phone = phone
        this.avatar = avatar
    }
}