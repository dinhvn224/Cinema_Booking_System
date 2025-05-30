"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var showtimeSchema = new _mongoose["default"].Schema({
  movieId: {
    //Tham chiếu đến Movie Model bằng ObjectId (_id)
    type: _mongoose["default"].Schema.Types.ObjectId,
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
  }
}, {
  timestamps: true,
  versionKey: false
});

var Showtime = _mongoose["default"].model("Showtime", showtimeSchema);

var _default = Showtime;
exports["default"] = _default;