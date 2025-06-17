
# 🎬 Cinema Booking System

## 📑 Mục lục

- [📖 Giới thiệu](#-giới-thiệu)
- [⚙️ Yêu cầu hệ thống](#️-yêu-cầu-hệ-thống)
- [🚀 Cài đặt & Chạy dự án](#-cài-đặt--chạy-dự-án)
- [📁 Cấu trúc thư mục](#-cấu-trúc-thư-mục)
- [🔐 Phân quyền API](#-phân-quyền-api)
- [📡 Mô tả API](#-mô-tả-api)
- [🧪 Kiểm thử - Ví dụ request/response](#-kiểm-thử---ví-dụ-requestresponse)
- [👤 Tài khoản mẫu](#-tài-khoản-mẫu)
- [📚 Tài liệu tham khảo & công cụ hỗ trợ](#-tài-liệu-tham-khảo--công-cụ-hỗ-trợ)

---

## 📖 Giới thiệu

Cinema Booking System là một hệ thống quản lý vé xem phim với các chức năng:

- Quản lý người dùng & phân quyền (User/Admin)  
- CRUD phim và suất chiếu  
- Chức năng đặt vé  
- Xác thực bảo mật với JWT  
- Validate dữ liệu đầu vào bằng Joi  
- Sử dụng Node.js, Express.js, MongoDB (kết nối qua Mongoose), Babel, Nodemon, dotenv  

---

## ⚙️ Yêu cầu hệ thống

- Node.js >= 16.x  
- MongoDB (local hoặc MongoDB Atlas)  
- pnpm hoặc npm  

---

## 🚀 Cài đặt & Chạy dự án

### 1. Clone dự án
```bash
git clone https://github.com/dinhvn224/Cinema_Booking_System.git
cd Cinema_Booking_System
```

### 2. Cài đặt package
```bash
pnpm install
# hoặc
npm install
```

### 3. Thiết lập môi trường `.env`
Tạo file `.env` tại thư mục gốc:

```env
PORT=8000
MONGO_URI=mongodb://localhost:27017/Cinema-Booking
JWT_SECRET=cinema_secret_key
JWT_EXPRIES_IN=3d
```

### 4. Chạy server
```bash
pnpm dev
# hoặc
npm run dev
```

API sẽ chạy tại: [http://localhost:8000/api](http://localhost:8000/api)

---

## 📁 Cấu trúc thư mục

```bash
src/
├── app.js                 # Điểm khởi đầu
├── configs/               # Cấu hình kết nối DB, JWT, ...
├── controllers/           # Logic xử lý các endpoint
├── middleware/            # Auth middleware, error handler
├── models/                # Mongoose schemas (User, Movie, Showtime, Booking)
├── routers/               # Route định tuyến
├── validation/            # Định nghĩa Joi schema
note/
└── cinema_booking.postman_collection.json  # Collection cho Postman
```

---

## 🔐 Phân quyền API

| Chức năng                 | Guest | User | Admin |
|---------------------------|:-----:|:----:|:-----:|
| Đăng ký / Đăng nhập       |  ✅   | ✅   | ✅    |
| Xem danh sách phim        |  ✅   | ✅   | ✅    |
| Thêm/sửa/xóa phim         |  ❌   | ❌   | ✅    |
| Quản lý suất chiếu        |  ❌   | ❌   | ✅    |
| Đặt vé                    |  ❌   | ✅   | ❌    |
| Hủy/Cập nhật vé đã đặt    |  ❌   | ✅   | ❌    |
| Xem lịch sử đặt vé        |  ❌   | ✅   | ❌    |
| Xem tất cả vé hệ thống    |  ❌   | ❌   | ✅    |
| Tìm kiếm phim             |  ✅   | ✅   | ✅    |
| Cập nhật thông tin cá nhân|  ❌   | ✅   | ✅    |

---

## 📡 Mô tả API

Các API được chia theo chức năng: Auth, Movie, Showtime, Booking  
Chi tiết request/response đầy đủ nằm trong phần tiếp theo.

---

## 🧪 Kiểm thử - Ví dụ request/response

Chi tiết ví dụ cho các API: Auth, Movie, Showtime, Booking đã được mô tả ở phần trên (vui lòng tham khảo chi tiết file đầy đủ hoặc phần yêu cầu ban đầu).

---

## 👤 Tài khoản mẫu

| Vai trò | Email           | Password |
|--------|------------------|----------|
| Admin  | vnd@gmail.com    | 12345678 |
| User   | a@gmail.com      | 12345678 |

---

## 📚 Tài liệu tham khảo & công cụ hỗ trợ

- [Blog Nodejs/MongoDB Thầy Đạt](https://letrongdat.vercel.app/nodejs/)
- Công cụ: Github, ChatGPT, VSCode, MongoDB, Postman

---

**Vũ Như Định**  
📧 Email: hhit357@gmail.com  
🌐 Github: [https://github.com/dinhvn224](https://github.com/dinhvn224)
