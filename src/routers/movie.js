import express from "express";
import {
  createmovie,
  updateMovie,
  deleteMovie,
  getMovies,
  getMovieById,
} from "../controllers/movie.js";

const router = express.Router();

router.post("/", createmovie);
router.get("/", getMovies);
router.get("/:id", getMovieById);
router.put("/:id", updateMovie);
router.delete("/:id", deleteMovie);

export default router;
