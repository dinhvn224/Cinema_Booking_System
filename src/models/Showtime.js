import mongoose from "mongoose";

const showtimeSchema = new mongoose.Schema({
    movieId: {
        //Tham chiếu đến Movie Model bằng ObjectId (_id)
        type: mongoose.Schema.Types.ObjectId,
        ref: "Movie",
        required: true
    },
    room: {
        type: String,
        required: true
    },
    startTime: {
        type: Date,
        required: true
    },
},
{
    timestamps: true,
    versionKey: false
});

const Showtime = mongoose.model("Showtime", showtimeSchema);

export default Showtime;