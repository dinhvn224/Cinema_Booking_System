"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var movieSchema = new _mongoose["default"].Schema({
  title: {
    type: String,
    required: true
  },
  description: String,
  duration: {
    // thời lượng film
    type: Number,
    required: true
  },
  genre: {
    //thể loại
    type: String,
    required: true
  },
  director: String,
  cast: [String] //mảng các diễn viên tham gia

}, {
  timestamps: true,
  versionKey: false
});

var Movie = _mongoose["default"].model("Movie", movieSchema);

var _default = Movie;
exports["default"] = _default;