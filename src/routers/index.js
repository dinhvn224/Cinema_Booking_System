import express from "express";
import routeAuth from "./auth";

const router = express.Router();
router.use("/auth", routeAuth);
export default router;
