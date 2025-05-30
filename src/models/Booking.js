import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
    userId: {
        //Tham chiếu đến User model bằng ObjectId (_id);
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    showtimeId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Showtime",
    },
    seats:[{
        type: String,
        required: true
    }],
    status: {
        type: String,
        enum: ['booked', 'cancelled'],
        default: 'booked'
    }
},
{
    timestamps: true,
    versionKey: false
});

const Booking = mongoose.model("Booking", bookingSchema);

export default Booking;