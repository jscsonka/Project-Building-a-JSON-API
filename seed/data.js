
import db from "../db/connection.js";
import Pokemon from "../models/pokemon.js";
import pokemons from "../db/pokemon.json" assert { type: "json" };
import pokemon from "../models/pokemon.js";

const insertData = async () => {
  // reset database
  await Pokemon.deleteMany({});

  // insert data
  await Pokemon.create(pokemons);

  // close db connection
  await db.close();
};

insertData();