const mongoose = require("mongoose");

// Mongoose Schema
let loanSchema = new mongoose.Schema(
    {
        bookID: {
            type: String,
            required: true,
        },
        borrowerID: {
            type: String,
            required: true,
        },
        active: {
            type: Boolean,
            required: true,
        },
    },
    {timestamps: {createdAt: "created_at"}},
);

// Translate Schema into Model and export
module.exports = mongoose.model("loan", loanSchema);
