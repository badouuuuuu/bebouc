const mongoose = require("mongoose");

let userSchema, userModel;

userSchema = new mongoose.Schema({
    email: String,
    name: String,
});

userModel = mongoose.model("User", userSchema);
// Export Model

module.exports = userModel;
