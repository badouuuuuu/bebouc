const mongoose = require("mongoose");

// Connection configuration
const server = "mongo:27017";
const database = "bebooks";
const user = "dev";
const password = "dev";

let db = mongoose.connection;

// Connection to database
mongoose.connect(
    `mongodb://${user}:${password}@${server}/${database}?authSource=admin`,
    {useNewUrlParser: true},
);

db.on("error", console.error.bind(console, "connection error:"));

db.once("open", () => {
    // we're connected!
    console.log("---------- 🚀  🚀  yeah! connected!  🚀 🚀 ----------");
});

module.exports = db;
