// Fichier Route pour l'API

/* Utilisation de l'outil INSOMNIA REST Client https://insomnia.rest/ pour tester les requete de son API */

/* ------------------------------------------------------------ */

const express = require("express"); // Initilisation d'express
const router = new express.Router(); /* Ajout d'express.router dans une variable pour une utilisation plus facile */

// Book Model
const Book = require("../models/book.model");

// @route   GET books
// @desc    get All books
// @access  Public
router.get("/books", (req, res) => {
    Book.find()
        .sort({title: 1})
        .then(books => res.json(books));
});

// @route   POST books
// @desc    Create A book
// @access  Admin
router.post("/books", (req, res) => {
    const newBook = new Book({
        title: req.body.title,
        author: req.body.author,
        isbn: req.body.isbn,
        language: req.body.language,
        summary: req.body.summary,
        owner: req.body.owner,
        isBook: req.body.isBook,
        isEbook: req.body.isEbook,
    });

    newBook.save().them(book => res.json(book));
});

// @route   DELETE books/:id
// @desc    Delete A book
// @access  Admin
router.delete("/books/:id", (req, res) => {
    Book.findById(req.params.id)
        .then(book => book.remove().then(() => res.json({success: true})))
        .catch(err => res.status(404).json(err));
});

module.exports = router;
