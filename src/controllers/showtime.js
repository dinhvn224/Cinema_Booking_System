
import Showtime from "../models/Showtime.js";

// CREATE
export const createShowtime = async (req, res) => {
  try {
    const showtime = new Showtime(req.body);
    await showtime.save();
    res.status(201).json(showtime);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// UPDATE
export const updateShowtime = async (req, res) => {
  try {
    const showtime = await Showtime.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!showtime) return res.status(404).json({ error: "Không tìm thấy suất chiếu" });
    res.json(showtime);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// DELETE
export const deleteShowtime = async (req, res) => {
  try {
    const showtime = await Showtime.findByIdAndDelete(req.params.id);
    if (!showtime) return res.status(404).json({ error: "Không tìm thấy suất chiếu" });
    res.json({ message: "Xóa suất chiếu thành công" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// GET ALL
export const getShowtimes = async (req, res) => {
  try {
    const { page = 1, limit = 10 } = req.query;
     const showtimes = await Showtime.find()
      .skip((Number(page) - 1) * Number(limit))
      .limit(Number(limit))
      .populate("movieId", "title genre duration");
    const total = await Showtime.countDocuments();
    res.json({
      data: showtimes,
      total,
      page: Number(page),
      limit: Number(limit),
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET BY ID
export const getShowtimeById = async (req, res) => {
  try {
    const showtime = await Showtime.findById(req.params.id).populate("movieId");
    if (!showtime) return res.status(404).json({ error: "Không tìm thấy suất chiếu" });
    res.json(showtime);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};