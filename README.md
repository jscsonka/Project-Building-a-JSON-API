# Project-Building-a-JSON-API

JSON Project API

## DESCRIPTION

The Pokemon API allows users to extract the following data for personal use:

- POKEMON DATA:
- attack: Number,
- defense: Number,
- height: Number,
- hp: Number,
- pokedex: Number,
- name: String,
- spattack: Number,
- spdefense: Number,
- speed: Number,
- weight: Number

## Usage / Routing

- The API has routes for full CRUD functionality and here are the methods to access:
  <ul> 
  <li> 1. Get Full Pokemon List: router.get("/", pokeRoutes.getPokemons)</li>
  <li> 2. Get a single Pokemon by _ID: router.get("/:id", pokeRoutes.getPokemon)</li>
  <li> 3. Get a single pokemon by Name: router.get("/pokedexId/:pokedexId", controllers.getPokedex)</li>
  <li> Update an existing Pokemon by Database ID: router.put("/:id", pokeRoutes.updatePokemon)
  <li> Update an existing Pokemon by Database ID: router.put("/:id", pokeRoutes.updatePokemon)</li>
  <li> Remove a pokemon by Database ID: router.delete("/:id", pokeRoutes.deletePokemon)</li>
  </ul>

## Resources

- This Pokemon API Utilizes a Pokemon API .json file found here:
  "https://www.kaggle.com/datasets/mofhasa/pokemon-data-simplified"
  -Simply sign in, and download the .json file if needed.
