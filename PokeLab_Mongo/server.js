
const express = require("express")
const morgan = require("morgan")
const bodyParser = require("body-parser")
const pokemonRoute = require("./routes/pokemonRouter")
const pokemon = require("./schema/pokeSchema")

const seedPokemon = [
    {
        "_id": "6273374f12483039956c6001",
        "name": "Pikachu",
        "img": "http://img.pokemondb.net/artwork/pikachu.jpg",
        "__v": 0
    },
    {
        "_id": "6273375a12483039956c6003",
        "name": "Jigglypuff",
        "img": "http://img.pokemondb.net/artwork/jigglypuff.jpg",
        "__v": 0
    },
    {
        "_id": "6273376212483039956c6005",
        "name": "Psyduck",
        "img": "http://img.pokemondb.net/artwork/psyduck.jpg",
        "__v": 0
    },
    {
        "_id": "6273376912483039956c6007",
        "name": "Charmander",
        "img": "http://img.pokemondb.net/artwork/charmander.jpg",
        "__v": 0
    },
    {
        "_id": "6273377c12483039956c6009",
        "name": "Oddish",
        "img": "http://img.pokemondb.net/artwork/oddish.jpg",
        "__v": 0
    },
    {
        "_id": "6273378412483039956c600b",
        "name": "Eevee",
        "img": "http://img.pokemondb.net/artwork/eevee.jpg",
        "__v": 0
    },
    {
        "_id": "627337ab12483039956c600d",
        "name": "Vulpix",
        "img": "http://img.pokemondb.net/artwork/vulpix.jpg",
        "__v": 0
    },
    {
        "_id": "62734e973f0ff558482ecf9c",
        "name": "Bulbasaur",
        "img": "http://img.pokemondb.net/artwork/bulbasaur.jpg",
        "__v": 0
    },
    {
        "_id": "62734ec93f0ff558482ecf9e",
        "name": "Mew",
        "img": "http://img.pokemondb.net/artwork/mew.jpg",
        "__v": 0
    },
    {
        "_id": "62734ed53f0ff558482ecfa0",
        "name": "Mewtwo",
        "img": "http://img.pokemondb.net/artwork/mewtwo.jpg",
        "__v": 0
    },
    {
        "_id": "62734ee33f0ff558482ecfa2",
        "name": "Squirtle",
        "img": "http://img.pokemondb.net/artwork/squirtle.jpg",
        "__v": 0
    },
    {
        "_id": "62734ef53f0ff558482ecfa4",
        "name": "Ninetails",
        "img": "http://img.pokemondb.net/artwork/ninetails.jpg",
        "__v": 0
    },
    {
        "_id": "62734f073f0ff558482ecfa6",
        "name": "Moltress",
        "img": "http://img.pokemondb.net/artwork/moltress.jpg",
        "__v": 0
    },
    {
        "_id": "62734f273f0ff558482ecfa8",
        "name": "Magikarp",
        "img": "http://img.pokemondb.net/artwork/magikarp.jpg",
        "__v": 0
    },
    {
        "_id": "62734f333f0ff558482ecfaa",
        "name": "Abra",
        "img": "http://img.pokemondb.net/artwork/abra.jpg",
        "__v": 0
    },
    {
        "_id": "62734faa3f0ff558482ecfaf",
        "name": "Ivysaur",
        "img": "http://img.pokemondb.net/artwork/ivysaur.jpg",
        "__v": 0
    },
    {
        "_id": "62734fb63f0ff558482ecfb1",
        "name": "Ivysaur",
        "img": "http://img.pokemondb.net/artwork/ivysaur.jpg",
        "__v": 0
    },
    {
        "_id": "62734fe43f0ff558482ecfb3",
        "name": "Onyx",
        "img": "http://img.pokemondb.net/artwork/onyx.jpg",
        "__v": 0
    }
]

const mongoConfig = require("./config")

require("dotenv").config()

const PORT = process.env.PORT || 3500;
const server = express()

server.use(morgan("dev"))
server.use(express.json())
server.use(bodyParser.json())

server.use("/pokemon", pokemonRoute)

// server.get("/", (req, res)=>{
//     res.status(200).json({message: "API UP!"})
// });

//Index Route shows all pokemon data
server.get("/", (req, res)=>{
    pokemon.find((err, allPokemon)=>{
        if(err){
            res.status(404).json({message: err.message})
        } else {
            res.status(200).json({allPokemon})
        }
    })
})

//Seeds all data to MongoDC
server.get("/seed", (req, res)=>{
    pokemon.insertMany(seedPokemon, (err, allPokemon)=>{
        if(err){
            res.status(400).json({message: err.message})
        }else{
            res.status(201).json(allPokemon)
        }
    })
})

//Deltes all Pokemon data
server.delete("/clear", (req, res)=>{
    pokemon.deleteMany((err)=>{
        if(err){
            res.status(404).json({message: err.message})
        }else{
            res.status(204).json({message: "DELETED"})
        }
    })
})

//Deltes  pokemon according to specified parameter
server.delete("/clearone", (req, res)=>{
    pokemon.deleteOne({name: "Ivysaur"}, (err)=>{
        if(err){
            res.status(404).json({message: err.message})
        }else{
            res.status(204).json({message: "DELETED"})
        }
    })
})

server.listen(PORT, ()=>{
    mongoConfig()
    console.log(`Server is listening: ${PORT}`)
})