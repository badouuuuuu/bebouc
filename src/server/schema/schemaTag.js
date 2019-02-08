const mongoose = require("mongoose");

// Mongoose Schema
const tagSchema = new mongoose.Schema(
    {
        tag: {
            type: String,
            required: true,
            unique: true,
        },
    },
    {timestamps: {createdAt: "created_at"}},
);

// Translate Schema into Model and export
module.exports = mongoose.model("tag", tagSchema);
