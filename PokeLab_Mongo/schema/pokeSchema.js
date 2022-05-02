const mongoose = require("mongoose")


const pokeSchema = new mongoose.Schema({
    name: {type: String, required: true},
    img: {type: String, required: false}
})

const pokeModel = mongoose.model("Pokemon", pokeSchema)

module.exports = pokeModel