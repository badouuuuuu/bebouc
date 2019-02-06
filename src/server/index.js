// Dependencies
import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import path from "path";

// Database connection
mongoose
    .connect("mongodb://dev:dev@mongo:2017/bebook?authSource=admin")
    .then(() => {
        console.log("Connected to mongoDB");
    })
    .catch(e => {
        console.log("Error while DB connecting");
        console.log(e);
    });

//  Express config
const app = express();

// Body Parser config and express protocol
let urlencodedParser = bodyParser.urlencoded({
    extended: true,
});

app.use(urlencodedParser);
app.use(bodyParser.json());

// CORS config (even if we aim to deploy product in https)
app.use((req, res, next) => {
    res.setHeader(
        "Access-Control-Allow-Headers",
        "X-Requested-With,content-type",
    );
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, OPTIONS, PUT, PATCH, DELETE",
    );
    res.setHeader("Access-Control-Allow-Credentials", true);
    next();
});

//  ??
app.use(express.static(path.resolve(__dirname, "../../bin/client")));

// Router config
const router = new express.Router();

app.use("/user", router);
require(`${__dirname}/controllers/userController`)(router);

// Port listener
const {APP_PORT} = process.env;

app.listen(APP_PORT, () =>
    console.log(`🚀 Server is listening on port ${APP_PORT}.`),
);
