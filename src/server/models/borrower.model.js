const mongoose = require("mongoose");

const server = "localhost:12345" ;
const database = "bebooks";
const user = "dev";
const password = "dev";

mongoose.connect(
    `mongodb://${user}:${password}@${server}/${database}`,
    {useNewUrlParser: true},
);

let BorrowerSchema = new mongoose.Schema({
    name: String,
});

module.exports = mongoose.model("Borrower", BorrowerSchema);
