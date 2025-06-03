import express from "express";
import routeMovies from "./movie.js";
const router = express.Router();
router.use("/movies", routeMovies);
export default router;
