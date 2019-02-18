// Dependencies
import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import path from "path";
import cors from "cors";

// Database connection
mongoose.connect(
    "mongodb+srv://becode:<becode>@cluster0-56rn0.mongodb.net/test?retryWrites=true",
);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));

db.once("open", () => {
    console.log("----------   yeah! connected!   ----------");
});

//  Express config
const app = express();

// Body Parser config and express protocol
const urlencodedParser = bodyParser.urlencoded({
    extended: true,
});

app.use(urlencodedParser);
app.use(bodyParser.json());
app.use(cors());

// CORS config (even if we aim to deploy product in https)
// app.use((req, res, next) => {
//     res.setHeader(
//         "Access-Control-Allow-Headers",
//         "X-Requested-With,content-type",
//     );
//     res.setHeader("Access-Control-Allow-Origin", "*");
//     res.setHeader(
//         "Access-Control-Allow-Methods",
//         "GET, POST, OPTIONS, PUT, PATCH, DELETE",
//     );
//     res.setHeader("Access-Control-Allow-Credentials", true);
//     next();
// });

//  ??
app.use(express.static(path.resolve(__dirname, "../../bin/client")));

// Router config
const router = new express.Router();

app.use("/api", router);
require(`${__dirname}/routes`)(router);

// Port listener
const {APP_PORT} = process.env || 8000;

app.listen(APP_PORT, () =>
    console.log(`🚀 Server is listening on port ${APP_PORT}.`),
);
