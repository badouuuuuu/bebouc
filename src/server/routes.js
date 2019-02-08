const userController = require("./controllers/userController.js");
const bookController = require("./controllers/bookController.js");
// const loanController = require("./controllers/loanController.js");
// const reviewController = require("./controllers/reviewController.js");
// const tagController = require("./controllers/tagController.js");

module.exports = function(app) {
    // user
    app.post("/login", userController.login);
    app.post("/create", userController.create);
    app.get("/users", userController.show);
    app.delete("/deleteuser", userController.deleteuser);
    // app.post("/store", userController.store);
    // app.post("/destroy", userController.destroy);
    // book
    app.get("/books", bookController.show);
    app.post("/books", bookController.create);
    app.put("/books/:id", bookController.store);
    app.delete("/books/:id", bookController.destroy);
    // loan

    // tag
};
