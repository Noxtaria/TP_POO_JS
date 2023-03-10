import express from "express"
import { App } from "./classes/app.js"

const dataservice = new App()

const api = express()

api.use(express.json())

api.post('/clients', (req, res) => {
    const {nom, prenom, telephone} = req.body
    dataservice.createClient(nom, prenom, telephone)
    if( nom != undefined && prenom != undefined && telephone != undefined){
        res.json({message : "Client ajouté"})
    } else {
        res.json({message : "Merci de transmettre un nom, prenom et votre numéro de téléphone"})
    }
})

api.post('/produits', (req, res) => {
    const {titre, prix, stock} = req.body
    dataservice.createProduit(titre, prix, stock)
    if( titre != undefined && prix != undefined && stock != undefined){
        res.json({message : "Produit ajouté"})
    } else {
        res.json({message : "Merci de transmettre un titre et la quantité"})
    }
})

api.get('/clients', (req,res) => {
    res.json(dataservice.clients)
})

api.get('/clients/:id', (req,res) => {
    const client = dataservice.findClientById(req.params.id)
    if( client != undefined){
        res.json(client)
    }else {
        res.json({message : "client pas trouvé"})
    }
})

api.get('/produits/:id', (req,res) => {
    const produit = dataservice.findProduitById(req.params.id)
    if( produit != undefined){
        res.json(produit)
    }else {
        res.json({message : "produit pas trouvé"})
    }
})

api.listen(3000, () => {
    dataservice.read()
    console.log("api boutique")
})
