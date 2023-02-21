import { Component } from "react";
import Produit from "./Produit";
import Panier from "./Paniers";
import "../magasin.css";

export default class Magasin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      produits: [
        {
          id: 1,
          titre: "Kiwi",
          prix: 5,
          description: "Kiwi Jaune",
        },
        {
          id: 2,
          titre: "Pomme",
          prix: 2,
          description: "Ceci est la description de la pomme",
        },
        {
          id: 3,
          titre: "Poire",
          prix: 4,
          description: "Ceci est la description de la poire",
        },
      ],
      panier: [
        {
            id: 1,
            titre: "Kiwi",
            prix: 5,
            description: "Kiwi Jaune",
          }
      ]
    };
  }

  render() {
    return (
      <>
        <h1>Magasin</h1>
        <div className="container">
          <div>
            <h2 className="h2-produit">Produits disponible</h2>
            {this.state.produits.map((produit) => (
              <Produit produit={produit} key={produit.id} />
            ))}
          </div>
          <div>
            <h2 className="h2-produit">Mon Panier</h2>
            {this.state.panier.map((panier, i) => (
              <Panier panier={panier} key={i} />
            ))}
          </div>
        </div>
      </>
    );
  }
}
