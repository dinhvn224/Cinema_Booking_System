"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var bookingSchema = new _mongoose["default"].Schema({
  userId: {
    //Tham chiếu đến User model bằng ObjectId (_id);
    type: _mongoose["default"].Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  showtimeId: {
    type: _mongoose["default"].Schema.Types.ObjectId,
    required: true,
    ref: "Showtime"
  },
  seats: [{
    type: String,
    required: true
  }],
  status: {
    type: String,
    "enum": ['booked', 'cancelled'],
    "default": 'booked'
  }
}, {
  timestamps: true,
  versionKey: false
});

var Booking = _mongoose["default"].model("Booking", bookingSchema);

var _default = Booking;
exports["default"] = _default;