import { Router } from "express";
import * as pokeRoutes from "../controllers/pokemon.js";

const router = Router();

// add routes
router.get("/pokemons", pokeRoutes.getPokemons)
router.get("/pokemons/:id", pokeRoutes.getPokemon)
router.post("/", pokeRoutes.createPokemon)
router.put("/:id", pokeRoutes.updatePokemon)
router.delete("/:id", pokeRoutes.deletePokemon)

export default router;
