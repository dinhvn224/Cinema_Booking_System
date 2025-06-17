import Movie from "../models/Movies";

// CREATE
export const createmovie = async (req, res) => {
  try {
    const movie = new Movie(req.body);
    await movie.save();
    res.status(201).json(movie);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// UPDATE
export const updateMovie = async (req, res) => {
  try {
    const movie = await Movie.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!movie) return res.status(404).json({ error: "Không tìm thấy bộ phim" });
    res.json(movie);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// DELETE
export const deleteMovie = async (req, res) => {
  try {
    const movie = await Movie.findByIdAndDelete(req.params.id);
    if (!movie) return res.status(404).json({ error: "Không tìm thấy bộ phim" });
    res.json({ message: "Xóa phim thành công" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// GET ALL
export const getMovies = async (req, res) => {
  try {
    const { search = "", page = 1, limit = 10 } = req.query;
    const query = { title: { $regex: search, $options: "i" } };

    const movies = await Movie.find(query)
      .skip((Number(page) - 1) * Number(limit))
      .limit(Number(limit));

    const total = await Movie.countDocuments(query);

    res.json({
      data: movies,
      total,
      page: Number(page),
      limit: Number(limit),
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET BY ID
export const getMovieById = async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);
    if (!movie) return res.status(404).json({ error: "Không tìm thấy phim" });
    res.json(movie);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
