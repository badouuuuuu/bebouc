const mongoose = require("mongoose");

// Mongoose Schema
let loanSchema = new mongoose.Schema(
    {
        bookID: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "book",
            required: [true, "the book reference is required"],
        },
        borrowerID: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "user",
            required: [true, "the user field is required"],
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
