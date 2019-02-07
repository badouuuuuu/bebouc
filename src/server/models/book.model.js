const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const BookSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    isbn: {
        type: String,
        required: true,
        max: 13,
        unique: true,
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
        type: Array,
    },
    owner: {
        type: String,
        required: true,
    },
    isBook: {
        type: Boolean,
        required: true,
    },
    isEbook: {
        type: Boolean,
        required: true,
    },
    created: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model("book", BookSchema);
