"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var userSchema = new _mongoose["default"].Schema({
  name: {
    type: String,
    required: [true, "Nhập tên tài khoản"],
    trim: true
  },
  email: {
    type: String,
    required: [true, "Nhập email"],
    unique: true,
    lowercase: true,
    match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, "Vui lòng cung cấp địa chỉ email hợp lệ"]
  },
  password: {
    type: String,
    required: [true, "Nhập mật khẩu"],
    minlength: [6, "Mật khẩu phải có ít nhất 6 kí tự"],
    select: false //k trả về password trong query

  },
  role: {
    type: String,
    "enum": ['admin', 'user'],
    "default": 'user'
  }
}, {
  timestamps: true,
  versionKey: false
});

var User = _mongoose["default"].model("User", userSchema);

var _default = User;
exports["default"] = _default;