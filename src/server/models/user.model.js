const mongoose = require("mongoose");

// Connection configuration
const server = "mongo:27017";
const database = "bebooks";
const user = "dev";
const password = "dev";

// Connection to database
mongoose.connect(
    `mongodb://${user}:${password}@${server}/${database}?authSource=admin`,
    {useNewUrlParser: true},
);

let userSchema,
    userModel,
    db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    // we're connected!
    console.log("---------- yeah! connected! ----------");
    // Model Class
    userSchema = new mongoose.Schema({
        email: String,
        name: String,
    });

    userModel = mongoose.model("User", userSchema);
});

// Export Model
module.exports = userModel;
