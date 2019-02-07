const mongoose = require("mongoose");

let BorrowerSchema = new mongoose.Schema({
    name: String,
    email: {},
});

module.exports = mongoose.model("Borrower", BorrowerSchema);
