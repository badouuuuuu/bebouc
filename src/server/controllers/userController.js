const account = require("./account/lib.js");
const booksController = require("./booksController.js");

module.exports = function(app) {
    app.post("/login", account.login);
    app.post("/signup", account.signup);

    app.get("/books", booksController.getAllBooks);
    app.post("/books", booksController.createBook);
    app.put("/books/:id", books.Controller.updateBook);
    app.delete("/books/:id", booksController.deleteBook);
};
