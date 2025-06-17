import express from "express";
import { restrictTo, verifyJWT } from "../middleware/authMiddleware";
import { validateRequest } from "../middleware/validateRequest";
import { createShowtimeSchema } from "../validation/showtimeValidation";
import { createShowtime, deleteShowtime, getShowtimeById, getShowtimes, updateShowtime } from "../controllers/showtime";

const router = express.Router();

router.post("/", verifyJWT, restrictTo("admin"),validateRequest(createShowtimeSchema), createShowtime);
router.get("/", getShowtimes);
router.get("/:id", getShowtimeById);
router.put("/:id", verifyJWT, restrictTo("admin"), updateShowtime);
router.delete("/:id", verifyJWT, restrictTo("admin"), deleteShowtime);

export default router;
