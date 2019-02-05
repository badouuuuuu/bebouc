import express from "express";
import path from "path";
let bodyParser = require("body-parser");

const booksRoute = require("./routes/books"); // On appel la route creer dans ./server/routes/books.js
const registerRoute = require("./routes/register");
const userRoute = require("./routes/user");

const {APP_PORT} = process.env;
const app = express();

app.use(bodyParser.json());

app.use(req => {
    // Permet l'affichage des requetes aux URL de l'API dans le terminal docker-compose
    console.log(`${new Date().toString()} => ${req.originalUrl}`);
    next();
});

app.use(express.static(path.resolve(__dirname, "../../bin/client")));
app.use(booksRoute); // Appel de la route cree dans ./server/routes/books.js
app.use(registerRoute); // Appel de la route cree dans ./server/routes/register.js
app.use(userRoute);

app.use((req, res) => {
    res.status(404).send(` 😱 💩 You are lost.. ;D 🚀 🙈`);
    /*  Middleware pour modifier message des erreurs de routes
     Status 404 Page Not Found */
});

app.use((err, req, res) => {
    console.error(err.stack);
    res.status(500).send(` 😱 💩 505 🚀 🙈`);
});

/* app.get("/hello", (req, res) => {
    console.log(`ℹ️  (${req.method.toUpperCase()}) ${req.url}`);
    res.send("Hello, World!");
});  */

app.listen(APP_PORT, () =>
    console.log(`🚀 Server is listening on port ${APP_PORT}.`),
);
