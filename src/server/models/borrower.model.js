const mongoose = require("mongoose");

const server = "localhost:12345";
const database = "bebooks";
const user = "admin";
const password = "pass";

mongoose.connect(
    `mongodb://${user}:${password}@${server}/${database}`,
    {useNewUrlParser: true},
);

let BorrowerSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        required: true,
        unique: true,
    },
});

module.exports = mongoose.model("Borrower", BorrowerSchema);
