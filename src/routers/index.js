import express from "express";
import routeAuth from "./auth";
import routeMovie from "./movie";

const router = express.Router();
router.use("/auth", routeAuth);
router.use("/movies", routeMovie)
export default router;
