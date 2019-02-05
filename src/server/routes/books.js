// Fichier Route pour l'API

/* Utilisation de l'outil INSOMNIA REST Client https://insomnia.rest/ pour tester les requete de son API */

/* ------------------------------------------------------------ */

import express from "express"; // Initilisation d'express
let Router = express.Router(); /* Ajout d'express.router dans une variable pour une utilisation plus facile */

// Creation de la root localhost/books pour listing de tout les livres
Router.get("/books", (req, res) => {
    if (req.query.id) {
        // ----> QueryString permet l'accessibilite via localhost/books?id=10
        res.send(`✔️ You have requested the book : ${req.query.id} 📖`);
    } else {
        res.send(`✔️ You have requested all books list 📚`);
    }
});

// :id est disponible via req par la propriete "params"
Router.get("/books/:id", (req, res) => {
    res.send(`✔️ You have requested the book : ${req.params.id} 📖`);
});

module.exports = Router; // ----> Export de router pour qu'il soit accessible sur index.js
