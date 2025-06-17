import Joi from "joi";

export const createBookingSchema = Joi.object({
    showtimeId: Joi.string().length(24).required().messages({
        "string.base": "showtimeId phải là chuỗi",
        "string.length": "showtimeId không hợp lệ",
        "any.required": "showtimeId là bắt buộc",
    }),
    seats: Joi.array().items(Joi.string().trim().required()).min(1).required().messages({
        "array.base": "seats phải là mảng",
        "array.min": "Phải chọn ít nhất 1 ghế",
        "any.required": "seats là bắt buộc",
    }),
    status: Joi.string().valid("booked", "cancelled").default("booked"),
});

export const updateBookingSchema = createBookingSchema.fork(
    ["showtimeId", "seats"],
    (schema) => schema.optional()
);