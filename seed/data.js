
import db from "../db/connection.js";
import Pokemon from "../models/pokemon.js";
import pokemons from "../db/pokemon.json" assert { type: "json" };

const insertData = async () => {
  // reset database
  await db.dropDatabase();

  // insert data
  await Pokemon.create(pokemons);

  // close db connection
  await db.close();
};

insertData();