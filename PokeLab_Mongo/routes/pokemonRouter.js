const express = require("express")
const pokemon = require("../schema/pokeSchema")

const pokeRoute = express.Router()

//Index of route shows all pokemon
pokeRoute.get("/", (req, res)=>{
    pokemon.find((err, allPokemon)=>{
        if(err){
            res.status(404).json({message: err.message})
        } else {
            res.status(200).json({allPokemon})
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


//Delete a pokemon using it's name
pokeRoute.delete("/:name", (req, res)=>{
    // const name = req.params.name
    pokemon.deleteOne({name: "Ivysaur"}, (err)=>{
        if(err){
            res.status(404).json({message: err.message})
        }else{
            res.status(204).json({message: "DELETED"})
        }
    })
})

//Delete using pokemone id
pokeRoute.delete("/delete/:id",(req, res)=>{
    const id = req.params.id
    log.findByIdAndDelete(id, (err)=>{
        if(err){
            res.status(404).json({message: err.message})
        }else{
            res.status(204).json({message: "Pokemon deleted."})
        }
    })
})

module.exports = pokeRoute