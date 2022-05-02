const express = require("express")
//IMPORT MODEL
const pokemon = require("../schema/pokeSchema")

const pokeRoute = express.Router()

pokeRoute.get("/", (req, res)=>{
    //find CAN take a query, and will return ALL THINGS in requested table
    // that matches the query
    // HOMIES OF MONGOOSE

    // READ
    pokemon.find((err, allPokemon)=>{
        //ERRORS GO FIRST
        if(err){
            res.status(404).json({message: err.message})
        } else {
            res.status(200).json({allPokemon})
        }
    })
})

//POST - STILL TAKES BODY
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

// pokeRoute.get("/:name", (req, res)=>{
//     //still comes in from params
//     const name = req.params.name
//     pokemon.find(name, (err, pokemon)=>{
//         if(err){
//             res.status(404).json({message: err.message})
//         }else{
//             res.status(200).json(pokemon)
//         }
//     })
// })



// pokeRoute.put("/:id", (req, res)=>{
//     const id = req.params.id
//     const updatedPokemon = req.body

//     pokemon.findByIdAndUpdate(id, updatedPokemon, {new: true},(err, updatedPokemon)=>{
//         if(err){
//             res.status(404).json({message: err.message})
//         } else {
//             res.status(202).json(updatedPokemon)
//         }
//     })
// })

// pokeRoute.delete("/:id",(req, res)=>{
//     const id = req.params.id

//     pokemon.findByIdAndDelete(id, (err)=>{
//         if(err){
//             res.status(404).json({message: err.message})
//         }else{
//             res.status(204).json({message: "DELETED"})
//         }
//     })
// })

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