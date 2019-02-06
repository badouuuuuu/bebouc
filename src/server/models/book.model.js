const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Connection to database
const server = "localhost:12345";
const database = "bebooks";
const user = "dev";
const password = "dev";

mongoose.connect(
    `mongodb://${user}:${password}@${server}/${database}`,
    {useNewUrlParser: true},
);

// Create Schema
const BookSchema = new Schema({
    author: {
        type: String,
        required: true,
    },
    isbn: {
        type: String,
        required: true,
    },
    language: {
        type: String,
        required: true,
    },
    summary: {
        type: String,
        required: true,
    },
    tags: {
        type: String,
        required: true,
    },
    owner: {
        type: String,
        required: true,
    },
});

module.exports = Book = mongoose.model("book", BookSchema);
