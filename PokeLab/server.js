//imports
const express = require("express")
const bodyParser = require("body-parser")
const morgan = require("morgan")

const pokeRouter = require("./routes/pokeRouter")


const server = express()
const PORT = process.env.PORT || 3000

// middleware

server.use(morgan("dev"))
server.use(express.json())
server.use(bodyParser.json())

server.use("/pokemon", pokeRouter)

server.get("/", (req, res)=>{
    res.status(200).json({message: 'Welcome to the Pokemon App!'})
})

// Inside your server.js, add a new get route /pokemon/:id
// That will res.status(200).json({id: req.params.id});
// So, when you go to localhost:3000/pokemon/whatever
// whatever will show up in the browser

server.get("/pokemon/:id", (req, res)=>{
    const id = req.params.id
    res.status(200).json ({
        Pokemon: `${id}`
    })
})


server.listen(PORT, ()=>{
    console.log(`Server is listening at ${PORT}`)
})



// Set up your index view to show your pokemon data
// Continue working on your Index.jsx view so that you can see:
// The name of each pokemon, as a list item, inside an unordered list
// This list should be dynamically rendered by jsx based on your data from your 'database'
// You'll notice the pokemon names aren't properly capitalized! Let's fix that! Manipulate the data programatically to capitalize the first letter of their names
 

// 🔴 Commit:
// "I can view a list of all my pokemon in the browser"

// Setting up your show route
// Inside your server.js, add a new get route /pokemon/:id
// That will res.status(200).json({id: req.params.id});
// So, when you go to localhost:3000/pokemon/whatever
// whatever will show up in the browser

// 🔴 Commit:
// "Show view shows req.params.id "

// Update the route in the server.js to render the show view with the pokemon data
// Oh no! The image is broken because in our database the image links don't have the .jpg ending, let's fix that programatically! Without going back to the database and editing it there, add on .jpg to the end of the pokemon's image data
