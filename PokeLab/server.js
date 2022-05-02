const express = require("express")
const bodyParser = require("body-parser")
const morgan = require("morgan")

const pokemon = require("./pokemonapp/pokemon")
const pokeRouter = require("./routes/pokeRouter")

const server = express()
const PORT = process.env.PORT || 3000

server.use(morgan("dev"))
server.use(express.json())
server.use(bodyParser.json())

server.use("/pokemon", pokeRouter)

server.get("/", (req, res)=>{
    let capitalNames =[];
    for(let i=0; i<pokemon.length;i++){
        let pokemonNames = (pokemon[i].name.charAt(0).toUpperCase()+pokemon[i].name.slice(1))
        capitalNames.push(pokemonNames)
        }
    res.status(200).json({message: 'Welcome to the Pokemon App!', Pokemon: capitalNames})
})

server.get("/pokemon/:id", (req, res)=>{
    const id = req.params.id
    res.status(200).json ({
        Pokemon: `${id}`
    })
})

server.listen(PORT, ()=>{
    console.log(`Server is listening at ${PORT}`)
})