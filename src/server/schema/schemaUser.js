const mongoose = require("mongoose");
const jwt = require("jwt-simple");
const config = require("../config/config");
const bcrypt = require("bcryptjs");

// Mongoose Schema
let userSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            lowercase: true,
            trim: true,
            unique: true,
            required: true,
        },
        password: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        surname: {
            type: String,
            required: true,
        },
        admin: {
            type: Boolean,
            required: true,
        },
    },
    {timestamps: {createdAt: "created_at"}},
);

// JTW methods
userSchema.methods = {
    authenticate: function(password, next /* fonction callback */) {
        bcrypt.compare(password, this.password, (err, result) => {
            if (err) {
                throw err;
            }

            next(result);
        });
    },
    getToken: function() {
        return jwt.encode(this, config.secret);
    },
};

// Translate Schema into Model and export
module.exports = mongoose.model("user", userSchema);
