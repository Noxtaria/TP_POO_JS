
import { Component } from 'react';
import Adresse from './Adresse';


export class Client extends Component{
    constructor(props){
        super(props)
        this.state = {
            client : [{nom: "WICK", 
            prenom: "John", 
            telephone: "0123456789",
            is_actif: true, 
            adresse: { rue: "Secret", ville: "LILLE", cp: "59000" }},

            {nom: "SICK", 
            prenom: "John", 
            telephone: "0123456789",
            is_actif: true, 
            adresse: { rue: "Secret", ville: "LILLE", cp: "59000" }}]
        }
    }

    render() {
        const {nom, prenom, telephone, is_actif} = this.state.client;
        return(
            <div>
                <table>
                    <thead>
                        <th>Nom</th>
                        <th>Prenom</th>
                        <th>Telephone</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{nom}</td>
                            <td>{prenom}</td>
                            <td>{telephone}</td>
                            <td>{is_actif}</td>

                    {/* Un Ternaire pour si le client est actif ou non  */}
                            is_actif ? :  
                            
                <Adresse adresse={this.state.client.adresse}></Adresse>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
       
   


}