
const express = require("express")
const morgan = require("morgan")
const bodyParser = require("body-parser")
const pokemonRoute = require("./routes/pokemonRouter")

const mongoConfig = require("./config")

require("dotenv").config()

const PORT = process.env.PORT || 3500;
const server = express()

server.use(morgan("dev"))
server.use(express.json())
server.use(bodyParser.json())

server.use("/pokemon", pokemonRoute)

server.get("/", (req, res)=>{
    res.status(200).json({message: "API UP!"})
});

server.listen(PORT, ()=>{
    mongoConfig()
    console.log(`Server is listening: ${PORT}`)
})