const mongoose = require("mongoose");
const userschema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    area: {
        type: String,
    },
    location: {
        type: String,
        //lat=""+" "+lan=""
    },
    accountType: {
        type: String,
        default: "ordinary",
        enum: ["ordinary", "worker", "office"]
    },
    phone: {
        type: Number,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        unique: true,
        required: true,
    },
})

module.exports = mongoose.model("User", userschema)