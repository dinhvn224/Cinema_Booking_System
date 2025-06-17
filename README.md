**🎬 Cinema Booking System**

**📖 Giới thiệu**

``Cinema Booking System là một hệ thống quản lý vé xem phim với các chức năng:``

``Quản lý người dùng & phân quyền (User/Admin)``

``CRUD phim và suất chiếu``

``Chức năng đặt vé``

``Xác thực bảo mật với JWT``

``Validate dữ liệu đầu vào bằng Joi``

``Dự án sử dụng Node.js, Express.js, MongoDB (kết nối qua Mongoose) và môi trường phát triển với Babel, Nodemon, dotenv.``

**⚙️ Yêu cầu hệ thống**

Node.js >= 16.x

MongoDB (local hoặc MongoDB Atlas)
```markdown
pnpm hoặc npm
```

**🚀 Cài đặt & Chạy dự án**

1. Clone dự án
```markdown
git clone https://github.com/dinhvn224/Cinema_Booking_System.git

cd Cinema_Booking_System
```

2. Cài đặt package
```markdown
   
pnpm install

hoặc

npm install
```

3. Thiết lập môi trường .env
   
Tạo file .env trong thư mục gốc:
```markdown

PORT=8000

MONGO_URI=mongodb://localhost:27017/Cinema-Booking

JWT_SECRET=cinema_secret_key  //Token được tạo ra khi đăng nhập, xác minh bằng JWT

JWT_EXPRIES_IN=3d   //Thiết lập thời gian hết hạn cho token JWT
```
4. Chạy server
```markdown
pnpm dev

hoặc
npm run dev
```

API sẽ chạy tại: http://localhost:8000/api

**📁 Cấu trúc thư mục**
```markdown
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

**📡 Mô tả API**

```markdown
🔐 Auth

Phương thức   Endpoint             Mô tả
---------     -------------------  -------------------------
POST         /api/auth/signup      Đăng ký tài khoản
POST         /api/auth/signin      Đăng nhập, nhận token

Account mẫu kiểm thử:
//signup
{
  "name": "Tran Van Nam",
  "email": "nam@gmail.com",
  "password": "12345678",
  "phone": "0912345678",
  "role": "user",
  "avatar": "https://i.pravatar.cc/150?img=1",
  "addresses": [
    { "street": "123 Đường ABC", "city": "Hà Nội", "isDefault": true }
  ]
}
//signin
{
   "email": "nam@gmail.com",
   "password": "12345678"
}


🎬 Movie

Phương thức   Endpoint             Mô tả
---------     -------------------  -------------------------
GET          /api/movies           Lấy danh sách phim
GET          /api/movies/:id       Chi tiết phim
POST         /api/movies           (Admin) Thêm phim
PUT          /api/movies/:id       (Admin) Cập nhật phim
DELETE       /api/movies/:id       (Admin) Xóa phim

🕒 Showtime

Phương thức   Endpoint             Mô tả
---------     -------------------  -------------------------
GET          /api/showtime         Lấy danh sách suất chiếu
GET          /api/showtime/:id     Chi tiết suất chiếu
POST         /api/showtime         (Admin) Thêm suất chiếu
PUT          /api/showtime/:id     (Admin) Cập nhật suất chiếu
DELETE       /api/showtime/:id     (Admin) Xóa suất chiếu

🎟️ Booking

Phương thức   Endpoint             Mô tả
---------     -------------------  -------------------------
GET          /api/booking          Lấy tất cả booking
GET          /api/booking/:id      Chi tiết booking
POST         /api/booking          (User) Đặt vé
PUT          /api/booking/:id      (Admin) Cập nhật booking
DELETE       /api/booking/:id      (Admin) Xóa booking
```



Một số route yêu cầu xác thực qua header:
```markdown

Authorization: Bearer <JWT Token>
```
Token sẽ hiển thị ra khi đăng nhập

🧪 Import Collection Postman

Import file sau vào Postman để thử nhanh các API:
```markdown

note/cinema_booking.postman_collection.json
```

**📚 Tài liệu tham khảo & công cụ hỗ trợ**

-[Blog Nodejs/MongoDB Thầy Đạt:](https://letrongdat.vercel.app/nodejs/)

-Công cụ hỗ trợ: Github, ChatGPT, VSCode, MongoDB, Postman


Vũ Như Định

📧 Email: hhit357@gmail.com

🌐 Github: https://github.com/dinhvn224

