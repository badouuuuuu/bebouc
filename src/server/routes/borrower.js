let BorrowerModel = require("../models/borrower.model"),
    Express = require("express"),
    Router = Express.Router();

// Create new borrower
// POST localhost/borrower

Router.post("/borrower", (req, res) => {
    if (!req.body) {
        return res.status(400).send("Request body is missing");
    }

    let model = new BorrowerModel(req.body);

    model
        .save()
        .then(doc => {
            if (!doc || doc.length === 0) {
                return res.status(500).send(doc);
            }

            res.status(201).send(doc);
            console.log(`Model is created`);
        })
        .catch(err => {
            res.status(500).json(err);
        });
});

module.exports = Router;
