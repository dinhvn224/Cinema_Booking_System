import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
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
        select: false, //k trả về password trong query
    },
    role: {
        type: String,
        enum: ['admin', 'user'],
        default: 'user'
    },
    avatar: {
      type: String,
      default: "",
    },
    addresses: {
      type: [String],
      default: [],
    },
},
{
    timestamps: true,
    versionKey: false
});

const User = mongoose.model("User", userSchema);

export default User;