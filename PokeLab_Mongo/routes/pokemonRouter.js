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
    pokemon.findOne({name: name,}, (err, pokemon)=>{
        if(err){
            res.status(404).json({message: err.message})
        } else {
            res.status(200).json(pokemon)
        }
    })
})


pokeRoute.get("/seed", (req, res)=>{
    // empty array is pretending to be data, please put data actually there
    // seeding the database
    pokemon.insertMany([], (err, allPokemon)=>{
        if(err){
            res.status(400).json({message: err.message})
        }else{
            res.status(201).json(allPokemon)
        }
    })
})

pokeRoute.delete("/clear", (req, res)=>{
    // delete many - take a param to match OR can be blank
    // if blank, it will delete EVERYTHING
    // use with love & care <3
    pokemon.deleteMany((err)=>{
        if(err){
            res.status(404).json({message: err.message})
        }else{
            res.status(204).json({message: "DELETED"})
        }
    })
})



module.exports = pokeRoute