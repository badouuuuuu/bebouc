const userController = require("./controllers/userController.js");
const bookController = require("./controllers/bookController.js");
// const loanController = require("./controllers/loanController.js");
const reviewController = require("./controllers/reviewController.js");
const tagController = require("./controllers/tagController.js");

module.exports = function(app) {
    // user
    app.post("/login", userController.login);
    app.post("/create", userController.create);
    app.get("/users", userController.show);
    app.delete("/users/:id", userController.destroy);
    app.put("/users/:id", userController.store);
    // book
    app.get("/books", bookController.show);
    app.post("/books", bookController.create);
    app.put("/books/:id", bookController.store);
    app.delete("/books/:id", bookController.destroy);
    // review
    app.get("/reviews", reviewController.show);
    app.post("/reviews", reviewController.create);
    app.put("/reviews/:id", reviewController.store);
    app.delete("/reviews/:id", reviewController.destroy);
    // loan
    // app.get("/loans", loanController.show);
    // app.post("/loans", loanController.create);
    // app.put("/loans/:id", loanController.store);
    // app.delete("/loans/:id", loanController.destroy);
    // tag
    app.get("/tags", tagController.show);
    app.post("/tags", tagController.create);
    app.put("/tags/:id", tagController.store);
    app.delete("/tags/:id", tagController.destroy);
};
