const express = require("express")
const pokemon = require("../schema/pokeSchema")

const pokeRoute = express.Router()

//Index of route shows all pokemon
pokeRoute.get("/", (req, res)=>{
    pokemon.find((err, allPokemon)=>{
        if(err){
            res.status(404).json({message: err.message})
        } else {
            res.status(200).json({message: "What's up. You can create your pokemon here, or update your pokemon using (/:id). Enjoy.", pocketmonsters: allPokemon})
        }
    })
})

//Get a specific pokemon's info
pokeRoute.get("/:name", (req, res)=>{
    const name = req.params.name
    pokemon.findOne({name: name,}, (err, pokemon)=>{
        if(err){
            res.status(404).json({message: err.message})
        } else {
            res.status(200).json(pokemon)
        }
    })
})

//Create/Post a new Pokemon 
pokeRoute.post("/", (req, res)=>{
    const newPokemon = req.body
    pokemon.create(newPokemon, (err, pokemon)=>{
        if(err){
            res.status(400).json({message: err.message})
        } else {
            res.status(201).json({pokemon})
            console.log("Pokemon created")
        }
    })
})

//Update pokemon by id
pokeRoute.put("/:id", (req, res)=>{
    const id = req.params.id
    const updatedPokemon = req.body

    pokemon.findByIdAndUpdate(id, updatedPokemon, {new: true},(err, updatedPokemon)=>{
        if(err){
            res.status(404).json({message: err.message})
        } else {
            res.status(202).json(updatedPokemon)
        }
    })
})

module.exports = pokeRoute