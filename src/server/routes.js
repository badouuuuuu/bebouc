const userController = require("./controllers/userController.js");
const bookController = require("./controllers/bookController.js");
// const loanController = require("./controllers/loanController.js");
// const reviewController = require("./controllers/reviewController.js");
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
    app.post("/book", bookController.create);
    app.put("/book/:id", bookController.store);
    app.delete("/book/:id", bookController.destroy);
    // loan

    // tag
    app.get("/tags", tagController.show);
    app.post("/tag", tagController.create);
    app.put("/tag/:id", tagController.store);
    app.delete("/tag/:id", tagController.destroy);
};
