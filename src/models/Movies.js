import mongoose from "mongoose";

const movieSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: String,
    duration: {
      // thời lượng film
      type: Number,
      required: true,
    },
    genre: {
      //thể loại
      type: [String],
      required: true,
    },
    director: String,
    cast: [String], //mảng các diễn viên tham gia
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Movie = mongoose.model("Movie", movieSchema);

export default Movie;
