PokeLab, but with MongoDB

SERVER 3500


TASKS (updated):

Assignment
Continue working by adding a Post and incorporating Mongoose JS

1. When a makes a get request to the /pokemon route they will see an array of pokemon objects
2. When a user makes a request to /pokemon/:name, a user will retrieve that pokemon by name
3. When a user posts a form it will create a brand new pokemon, and then return the added pokemon


The array of Pokemon from Postman:

{
    "allPokemon": [
        {
            "_id": "627011b9fb6f76844136d52c",
            "name": "Bulbasaur",
            "img": "http://img.pokemondb.net/artwork/bulbasaur.jpg",
            "__v": 0
        },
        {
            "_id": "6270127bfb6f76844136d52e",
            "name": "Ivysaur",
            "img": "http://img.pokemondb.net/artwork/ivysaur.jpg",
            "__v": 0
        },
        {
            "_id": "62701295fb6f76844136d530",
            "name": "Venusaur",
            "img": "http://img.pokemondb.net/artwork/venusaur.jpg",
            "__v": 0
        },
        {
            "_id": "627012a5fb6f76844136d532",
            "name": "Charmander",
            "img": "http://img.pokemondb.net/artwork/charmander.jpg",
            "__v": 0
        },
        {
            "_id": "627012b6fb6f76844136d534",
            "name": "Charizard",
            "img": "http://img.pokemondb.net/artwork/charizard.jpg",
            "__v": 0
        },
        {
            "_id": "627012d4fb6f76844136d536",
            "name": "Squirtle",
            "img": "http://img.pokemondb.net/artwork/squirtle.jpg",
            "__v": 0
        },
        {
            "_id": "627012e4fb6f76844136d538",
            "name": "Wartortle",
            "img": "http://img.pokemondb.net/artwork/wartortle.jpg",
            "__v": 0
        }
    ]
}