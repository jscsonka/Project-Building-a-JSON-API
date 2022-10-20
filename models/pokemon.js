
import mongoose from "mongoose";
const Schema = mongoose.Schema;

let pokeSchema = new Schema({
    _id: String,
    attack: Number,
    defense: Number,
    height: Number,
    hp: Number,
    id: Number,
    name: String,
    spattack: Number,
    spdefense: Number,
    speed: Number,
    weight: Number
});

export default mongoose.model("pokeSchemas", pokeSchema);