import express from "express";
import { restrictTo, verifyJWT } from "../middleware/authMiddleware";
import { validateRequest } from "../middleware/validateRequest";
import { createBookingSchema } from "../validation/bookingValidation";
import { createBooking, deleteBooking, getBookingById, getBookings, updateBooking } from "../controllers/booking";

const router = express.Router();

router.post("/", verifyJWT, restrictTo("user"), validateRequest(createBookingSchema), createBooking);
router.get("/", getBookings);
router.get("/:id", getBookingById);
router.put("/:id", verifyJWT, restrictTo("user"), updateBooking);
// router.delete("/:id", verifyJWT, restrictTo("admin"), deleteBooking);

export default router;
