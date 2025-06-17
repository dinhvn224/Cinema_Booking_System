import Joi from "joi";

export const createShowtimeSchema = Joi.object({
    movieId: Joi.string().length(24).required().messages({
        "string.base": "movieId phải là chuỗi",
        "string.length": "movieId không hợp lệ",
        "any.required": "movieId là bắt buộc",
    }),
    room: Joi.string().trim().required().messages({
        "string.base": "Phòng chiếu phải là chuỗi",
        "string.empty": "Phòng chiếu là bắt buộc",
        "any.required": "Phòng chiếu là bắt buộc",
    }),
    startTime: Joi.date().iso().required().messages({
        "date.base": "Thời gian chiếu phải là ngày hợp lệ",
        "any.required": "Thời gian chiếu là bắt buộc",
    }),
});
export const updateShowtimeSchema = createShowtimeSchema.fork(
    ["movieId", "room", "startTime"],
    (schema) => schema.optional()
);