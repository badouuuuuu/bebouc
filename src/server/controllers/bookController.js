// Book Model
const Book = require("../schema/schemaBook.js");

// @route   GET books
// @desc    get All books
// @access  Public
const getAllBooks = (req, res) => {
    Book.find()
        .sort({title: 1})
        .then(books => res.json(books));
};

// @route   POST books
// @desc    Create A book
// @access  Admin
const createBook = (req, res) => {
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

    newBook
        .save()
        .then(book => res.json(book))
        .catch(err => res.status(400).send(err));
};

// @route   PUT book/:id
// @desc    Update A book
// @access  Admin
const updateBook = (req, res) => {
    Book.findById(req.params.id)
        .then(book => book.update().save())
        .then(book => res.json(book))
        .catch(err => res.status(400).send(err));
};

// @route   DELETE books/:id
// @desc    Delete A book
// @access  Admin
const deleteBook = (req, res) => {
    Book.findById(req.params.id)
        .then(book => book.remove().then(() => res.json({success: true})))
        .catch(err => res.status(404).json(err));
};

// Exports des fonctions
exports.getAllBooks = getAllBooks;
exports.createBook = createBook;
exports.updateBook = updateBook;
exports.deleteBook = deleteBook;
