import { Router } from "express";
import pokeRoutes from "./pokemon.js"

const router = Router();

router.get("/", (req, res) => res.send("This is the api root!"));

router.use("/", pokeRoutes);

export default router;