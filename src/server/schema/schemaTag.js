const mongoose = require("mongoose");
// const jwt = require("jwt-simple");
// const config = require("../config/config");

// Mongoose Schema
const schemaTag = new mongoose.Schema(
    {
        tag: {
            type: String,
            required: true,
        },
    },
    {timestamps: {createdAt: "created_at"}},
);

module.exports = mongoose.model("tag", schemaTag);
