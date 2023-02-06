import MaisonMere from "./MaisonMere.js";

export default class Services extends MaisonMere {
  constructor(titre, prix, description, domaine) {
    super(titre, prix, description);
    this.domaine = domaine;
  }
}
