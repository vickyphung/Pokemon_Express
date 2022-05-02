
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



// Set up your index view to show your pokemon data
// Continue working on your Index.jsx view so that you can see:
// The name of each pokemon, as a list item, inside an unordered list
// This list should be dynamically rendered by jsx based on your data from your 'database'


//CAPITALIZE POKEMON NAMES
// You'll notice the pokemon names aren't properly capitalized! Let's fix that! Manipulate the data programatically to capitalize the first letter of their names Commit: "I can view a list of all my pokemon in the browser"




//ADD .JPG TO POKEMON IMAGE DATA
// Oh no! The image is broken because in our database the image links don't have the .jpg ending, let's fix that programatically! Without going back to the database and editing it there, add on .jpg to the end of the pokemon's image data


// * /:id = PUT => UPDATE => Take a post & param, return CHANGED post

// .put((req, res)=>{
//     const body = req.body
//     const image = req.params.img










server.listen(PORT, ()=>{
    console.log(`Server is listening at ${PORT}`)
})