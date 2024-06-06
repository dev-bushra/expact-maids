const mongoose = require("mongoose")

const configSchema = new mongoose.Schema({
    websiteSenderEmailsList:{
        type: [String],
    },
    version: {
        type: Number,
        unique: true
    }
})

module.exports = mongoose.model("Configs",configSchema)