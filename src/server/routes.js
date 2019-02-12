const userController = require("./Controllers/User.js");
const bookController = require("./Controllers/Book.js");
const loanController = require("./Controllers/Loan.js");
const reviewController = require("./Controllers/Review.js");
const tagController = require("./Controllers/Tag.js");

module.exports = function(app) {
    // user
    app.post("/login", userController.login);
    app.post("/create", userController.create);
    app.get("/users", userController.list);
    app.delete("/users/:id", userController.destroy);
    app.put("/users/:id", userController.edit);
    // booklist
    app.get("/books", bookController.list);
    app.post("/books", bookController.create);
    app.put("/books/:id", bookController.edit);
    app.delete("/books/:id", bookController.destroy);
    // review
    app.get("/reviews", reviewController.list);
    app.post("/reviews", reviewController.create);
    app.put("/reviews/:id", reviewController.edit);
    app.delete("/reviews/:id", reviewController.destroy);
    // loan
    app.get("/loans", loanController.list);
    app.post("/loans", loanController.create);
    app.put("/loans/:id", loanController.edit);
    app.delete("/loans/:id", loanController.destroy);
    // tag
    app.get("/tags", tagController.list);
    app.post("/tags", tagController.create);
    app.put("/tags/:id", tagController.edit);
    app.delete("/tags/:id", tagController.destroy);
};
