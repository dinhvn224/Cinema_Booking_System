import Joi from "joi";

export const createMovieSchema = Joi.object({
    title: Joi.string().trim().max(200).required().messages({
        "string.base": "Tên phim phải là chuỗi",
        "string.empty": "Tên phim là bắt buộc",
        "string.max": "Tên phim không được vượt quá 200 ký tự",
        "any.required": "Tên phim là bắt buộc",
    }),
    description: Joi.string().allow("").optional(),
    duration: Joi.number().integer().min(1).required().messages({
        "number.base": "Thời lượng phải là số",
        "number.min": "Thời lượng phải lớn hơn 0",
        "any.required": "Thời lượng là bắt buộc",
    }),
    genre: Joi.string().trim().required().messages({
        "string.base": "Thể loại phải là chuỗi",
        "string.empty": "Thể loại là bắt buộc",
        "any.required": "Thể loại là bắt buộc",
    }),
    director: Joi.string().allow("").optional(),
    cast: Joi.array().items(Joi.string().trim()).optional(),
});
export const updateMovieSchema = createMovieSchema.fork(
    ["title", "duration", "genre"],
    (schema) => schema.optional()
);