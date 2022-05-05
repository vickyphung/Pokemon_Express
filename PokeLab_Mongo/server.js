
const express = require("express")
const morgan = require("morgan")
const bodyParser = require("body-parser")
const pokemonRoute = require("./routes/pokemonRouter")
const pokemon = require("./schema/pokeSchema")

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




server.get("/", (req, res)=>{
    pokemon.find((err, allPokemon)=>{
        if(err){
            res.status(404).json({message: err.message})
        } else {
            res.status(200).json({allPokemon})
        }
    })
})


server.get("/seed", (req, res)=>{
    pokemon.insertMany([], (err, allPokemon)=>{
        if(err){
            res.status(400).json({message: err.message})
        }else{
            res.status(201).json(allPokemon)
        }
    })
})

server.delete("/clear", (req, res)=>{
    pokemon.deleteMany((err)=>{
        if(err){
            res.status(404).json({message: err.message})
        }else{
            res.status(204).json({message: "DELETED"})
        }
    })
})


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





