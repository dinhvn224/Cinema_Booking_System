import Booking from "../models/Booking.js";

// CREATE
export const createBooking = async (req, res) => {
  try {
     const booking = new Booking({
      userId: req.user._id,
      showtimeId: req.body.showtimeId,
      seats: req.body.seats,
      status: req.body.status // nếu muốn cho phép truyền status, hoặc bỏ dòng này nếu không
    });
    await booking.save();
    res.status(201).json(booking);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// UPDATE
export const updateBooking = async (req, res) => {
  try {
    const booking = await Booking.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!booking) return res.status(404).json({ error: "Không tìm thấy vé" });
    res.json(booking);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// DELETE
// export const deleteBooking = async (req, res) => {
//   try {
//     const booking = await Booking.findByIdAndDelete(req.params.id);
//     if (!booking) return res.status(404).json({ error: "Không tìm thấy vé" });
//     res.json({ message: "Xóa vé thành công" });
//   } catch (err) {
//     res.status(400).json({ error: err.message });
//   }
// };

// GET ALL
export const getBookings = async (req, res) => {
  try {
    const { page = 1, limit = 10 } = req.query;
    const bookings = await Booking.find()
      .skip((Number(page) - 1) * Number(limit))
      .limit(Number(limit))
      .populate("userId", "name email") // chỉ lấy name, email của user
      .populate({
        path: "showtimeId",
        populate: { path: "movieId", select: "title genre" }, // lấy cả thông tin phim trong showtime
      });
      const total = await Booking.countDocuments();
    res.json({
      data: bookings,
      total,
      page: Number(page),
      limit: Number(limit),
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET BY ID
export const getBookingById = async (req, res) => {
    try {
        const booking = await Booking.findById(req.params.id)
            .populate("userId", "name email")
            .populate({
                path: "showtimeId",
                populate: { path: "movieId", select: "title genre" }
            });
        if (!booking) return res.status(404).json({ error: "Không tìm thấy vé" });
        res.json(booking);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};