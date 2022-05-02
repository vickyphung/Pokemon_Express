const express = require("express")
const pokemon = require("../schema/pokeSchema")

const pokeRoute = express.Router()

pokeRoute.get("/", (req, res)=>{
    pokemon.find((err, allPokemon)=>{
        if(err){
            res.status(404).json({message: err.message})
        } else {
            res.status(200).json({allPokemon})
        }
    })
})

pokeRoute.post("/", (req, res)=>{
    const newPokemon = req.body
    pokemon.create(newPokemon, (err, pokemon)=>{
        if(err){
            res.status(400).json({message: err.message})
        } else {
            res.status(201).json({pokemon})
        }
    })
})


pokeRoute.get("/:name", (req, res)=>{
    const name = req.params.name
    // returns an array [] of ALL things that match
    // findOne returns an object of EXACTLY ONE THING
    pokemon.findOne({name: name,}, (err, pokemon)=>{
        if(err){
            res.status(404).json({message: err.message})
        } else {
            res.status(200).json(pokemon)
        }
    })
})

module.exports = pokeRoute