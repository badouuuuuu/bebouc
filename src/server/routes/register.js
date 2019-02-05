import express from "express";
let Router = express.Router();

Router.post("/register", (req, res) => {
    res.send(`✔️ You have requested the POST register API ®️`);
});

module.exports = Router;
