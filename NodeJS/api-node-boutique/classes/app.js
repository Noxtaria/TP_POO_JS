import { readFileSync, writeFileSync } from "fs";
import Client from "./clients.js";
import Commande from "./commandes.js";
import Produit from "./produits.js";

export class App {
  constructor() {
    this.clients = [];
    this.produits = [];
    this.commandes = [];
    this.counter = 0;
    this.fileClient = "client.json";
    this.fileProduit = "produit.json";
    this.fileCommande = "commande.json";
  }

  read() {
    try {
      const contentClient = readFileSync(this.fileClient).toString();
      this.clients = JSON.parse(contentClient);
    } catch (err) {
      console.error(
        `Erreur de lecture du fichier ${this.fileClient}: ${err.message}`
      );
    }

    try {
      const contentProduit = readFileSync(this.fileProduit).toString();
      this.produits = JSON.parse(contentProduit);
    } catch (err) {
      console.error(
        `Erreur de lecture du fichier ${this.fileProduit}: ${err.message}`
      );
    }

    try {
      const contentCommande = readFileSync(this.fileCommande).toString();
      this.commandes = JSON.parse(contentCommande);
    } catch (err) {
      console.error(
        `Erreur de lecture du fichier ${this.fileCommande}: ${err.message}`
      );
    }
  }

  writeClient() {
    writeFileSync(this.fileClient, JSON.stringify(this.clients));
  }

  writeProduit() {
    writeFileSync(this.fileProduit, JSON.stringify(this.produits));
  }

  writeCommande() {
    writeFileSync(this.fileCommande, JSON.stringify(this.commandes));
  }

  createClient(nom, prenom, telephone) {
    this.read();
    const client = new Client(++this.counter, nom, prenom, telephone);
    this.clients.push(client);
    this.writeClient();
  }

  createProduit(titre, prix, stock) {
    const produit = new Produit(++this.counter, titre, prix, stock);
    this.produits.push(produit);
    this.writeProduit();
  }

  createCommande(clients, produits) {

    const client = this.findClientById(clientId);
  if (!client) {
    console.error(`Le client avec l'identifiant n'existe pas.`);
    return;
  }

    const produit = this.findProduitById(id);
    if (!produit) {
      console.error(`Le produit avec l'identifiant ${id} n'existe pas.`);
      return;
    }
    produits.push(produit);
  

    const commande = new Commande(this.commandes.length + 1, clients, produits);
    this.commandes.push(commande);
    this.writeCommande();
  }

  findClient() {
    return this.clients;
  }

  findClientById(id) {
    return this.clients.find((c) => c.id == id);
  }

  findProduitById(id) {
    return this.produits.find((p) => p.id == id);
  }

  findCommande() {
    return this.commandes;
  }

  findCommandeById(id) {
    return this.commandes.find((cmd) => cmd.id == id);
  }
}
