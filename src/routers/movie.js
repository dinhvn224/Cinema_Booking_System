import express from "express";
import { createMovieSchema } from "../validation/movieValidation.js";
import { createmovie, deleteMovie, getMovieById, getMovies, updateMovie } from "../controllers/movie.js";
import { restrictTo, verifyJWT } from "../middleware/authMiddleware.js";
import { validateRequest } from "../middleware/validateRequest.js";

const router = express.Router();

router.get("/", getMovies);
router.post("/", verifyJWT, restrictTo("admin"),validateRequest(createMovieSchema), createmovie);
router.get("/:id", getMovieById);
router.put("/:id", verifyJWT, restrictTo("admin"), updateMovie);
router.delete("/:id", verifyJWT, restrictTo("admin"), deleteMovie);



export default router;
