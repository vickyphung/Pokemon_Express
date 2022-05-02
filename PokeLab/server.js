const express = require("express")
const bodyParser = require("body-parser")
const morgan = require("morgan")

const pokeRouter = require("./routes/pokeRouter")

const server = express()
const PORT = process.env.PORT || 3000

server.use(morgan("dev"))
server.use(express.json())
server.use(bodyParser.json())

server.use("/pokemon", pokeRouter)

server.get("/", (req, res)=>{
    res.status(200).json({message: 'Welcome to the Pokemon App!'})
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