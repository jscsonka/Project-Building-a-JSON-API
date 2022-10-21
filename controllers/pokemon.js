import Pokemon from "../models/pokemon.js";

export const getPokemons = async (req, res) => {
  try {
    const pokemons = await Pokemon.find();
    res.json(pokemons);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const getPokemon = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id)
    const pokemon = await Pokemon.findById(id)
    console.log(pokemon)

    if (pokemon) {
      return res.json(pokemon);
    }

    res.status(404).json({ message: "Pokemon not found!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const createPokemon = async (req, res) => {
  try {
    const pokemons = new Pokemon(req.body);
    await pokemons.save();
    res.status(201).json(pokemons);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const updatePokemon = async (req, res) => {
  try {
    const { id } = req.params;
    const pokemons = await Pokemon.findByIdAndUpdate(id, req.body);
    res.status(201).json(pokemons);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

export const deletePokemon = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Pokemon.findByIdAndDelete(id);

    if (deleted) {
      return res.status(200).send("Pokemon deleted!");
    }

    throw new Error("Pokemon not found");
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};