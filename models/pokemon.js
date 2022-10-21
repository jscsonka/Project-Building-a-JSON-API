
import mongoose from "mongoose";
const Schema = mongoose.Schema;

let pokeSchema = new Schema({
    attack: Number,
    defense: Number,
    height: Number,
    hp: Number,
    pokedex: Number,
    name: String,
    spattack: Number,
    spdefense: Number,
    speed: Number,
    weight: Number
});

export default mongoose.model("pokeSchemas", pokeSchema);