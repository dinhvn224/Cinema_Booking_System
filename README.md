**🎬 Cinema Booking System**

**📖 Giới thiệu**

``Cinema Booking System là một hệ thống quản lý vé xem phim với các chức năng:``

``-Quản lý người dùng & phân quyền (User/Admin)``

``-CRUD phim và suất chiếu``

``-Chức năng đặt vé``

``-Xác thực bảo mật với JWT``

``-Validate dữ liệu đầu vào bằng Joi``

``-Dự án sử dụng Node.js, Express.js, MongoDB (kết nối qua Mongoose) và môi trường phát triển với Babel, Nodemon, dotenv.``

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

---

## Phân quyền API

| Chức năng                | Guest | User | Admin |
|--------------------------|:-----:|:----:|:-----:|
| Đăng ký / Đăng nhập      |   ✅   |  ✅  |  ✅   |
| Xem danh sách phim       |   ✅   |  ✅  |  ✅   |
| Thêm/sửa/xóa phim        |   ❌   |  ❌  |  ✅   |
| Quản lý suất chiếu       |   ❌   |  ❌  |  ✅   |
| Đặt vé                   |   ❌   |  ✅  |  ❌   |
| Hủy/Cập nhật vé đã đặt   |   ❌   |  ✅  |  ❌   |
| Xem lịch sử đặt vé       |   ❌   |  ✅  |  ❌   |
| Xem tất cả vé hệ thống   |   ❌   |  ❌  |  ✅   |
| Tìm kiếm phim            |   ✅   |  ✅  |  ✅   |
| Cập nhật thông tin cá nhân|  ❌   |  ✅  |  ✅   |

---

**📡 Mô tả API**

```markdown
🔐 Auth

Phương thức   Endpoint             Mô tả
---------     -------------------  -------------------------
POST         /api/auth/signup      Đăng ký tài khoản
POST         /api/auth/signin      Đăng nhập, nhận token

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

**KIỂM THỬ**
## Ví dụ request/response cho tất cả API

---

### 🔐 Auth

#### Đăng ký tài khoản
```http
POST /api/auth/signup
Content-Type: application/json
```
```json
{
  "name": "Vu Van A",
  "email": "vva@gmail.com",
  "password": "12345678",
  "phone": "0912345678",
  "role": "user",
  "avatar": "https://i.pravatar.cc/150?img=1",
  "addresses": ["123 Đường ABC, Hà Nội"]
}
```
**Response:**
```json
{
  "message": "Đăng ký thành công",
  "data": {
    "_id": "665f1b...",
    "name": "Vu Van A",
    "email": "vva@gmail.com",
    "phone": "0912345678",
    "role": "user",
    "avatar": "https://i.pravatar.cc/150?img=1",
    "addresses": ["123 Đường ABC, Hà Nội"]
  }
}
```

#### Đăng nhập
```http
POST /api/auth/signin
Content-Type: application/json
```
```json
{
  "email": "vva@gmail.com",
  "password": "12345678"
}
```
**Response:**
```json
{
  "message": "Đăng nhập thành công",
  "token": "<JWT_TOKEN>",
  "user": {
    "_id": "665f1b...",
    "name": "Vu Van A",
    "email": "vva@gmail.com",
    "role": "user"
  }
}
```

---

### 🎬 Movie

#### Lấy danh sách phim
```http
GET /api/movies
```
**Response:**
```json
{
  "data": [
    {
      "_id": "665f1c...",
      "title": "Avengers",
      "description": "Superhero movie",
      "duration": 120,
      "genre": ["Action"],
      "director": "Joss Whedon",
      "cast": ["Robert Downey Jr.", "Chris Evans"]
    }
    // ...
  ],
  "total": 10,
  "page": 1,
  "limit": 10
}
```

#### Lấy chi tiết phim
```http
GET /api/movies/665f1c...
```
**Response:**
```json
{
  "_id": "665f1c...",
  "title": "Avengers",
  "description": "Superhero movie",
  "duration": 120,
  "genre": ["Action"],
  "director": "Joss Whedon",
  "cast": ["Robert Downey Jr.", "Chris Evans"]
}
```

#### Thêm phim (Admin)
```http
POST /api/movies
Authorization: Bearer <admin_token>
Content-Type: application/json
```
```json
{
  "title": "Inception",
  "description": "Mind-bending thriller",
  "duration": 148,
  "genre": ["Action", "Sci-Fi"],
  "director": "Christopher Nolan",
  "cast": ["Leonardo DiCaprio", "Joseph Gordon-Levitt"]
}
```
**Response:**
```json
{
  "_id": "665f1d...",
  "title": "Inception",
  "description": "Mind-bending thriller",
  "duration": 148,
  "genre": ["Action", "Sci-Fi"],
  "director": "Christopher Nolan",
  "cast": ["Leonardo DiCaprio", "Joseph Gordon-Levitt"]
}
```

#### Cập nhật phim (Admin)
```http
PUT /api/movies/665f1d...
Authorization: Bearer <admin_token>
Content-Type: application/json
```
```json
{
  "title": "Inception (2010)"
}
```
**Response:**
```json
{
  "_id": "665f1d...",
  "title": "Inception (2010)",
  "description": "Mind-bending thriller",
  "duration": 148,
  "genre": ["Action", "Sci-Fi"],
  "director": "Christopher Nolan",
  "cast": ["Leonardo DiCaprio", "Joseph Gordon-Levitt"]
}
```

#### Xóa phim (Admin)
```http
DELETE /api/movies/665f1d...
Authorization: Bearer <admin_token>
```
**Response:**
```json
{
  "message": "Xóa phim thành công"
}
```

---

### 🕒 Showtime

#### Lấy danh sách suất chiếu
```http
GET /api/showtime
```
**Response:**
```json
{
  "data": [
    {
      "_id": "665f1e...",
      "movieId": "665f1c...",
      "room": "A1",
      "startTime": "2025-06-12T10:00:00.000Z"
    }
    // ...
  ],
  "total": 10,
  "page": 1,
  "limit": 10
}
```

#### Lấy chi tiết suất chiếu
```http
GET /api/showtime/665f1e...
```
**Response:**
```json
{
  "_id": "665f1e...",
  "movieId": "665f1c...",
  "room": "A1",
  "startTime": "2025-06-12T10:00:00.000Z"
}
```

#### Thêm suất chiếu (Admin)
```http
POST /api/showtime
Authorization: Bearer <admin_token>
Content-Type: application/json
```
```json
{
  "movieId": "665f1c...",
  "room": "A1",
  "startTime": "2025-06-12T10:00:00.000Z"
}
```
**Response:**
```json
{
  "_id": "665f1e...",
  "movieId": "665f1c...",
  "room": "A1",
  "startTime": "2025-06-12T10:00:00.000Z"
}
```

#### Cập nhật suất chiếu (Admin)
```http
PUT /api/showtime/665f1e...
Authorization: Bearer <admin_token>
Content-Type: application/json
```
```json
{
  "room": "A2"
}
```
**Response:**
```json
{
  "_id": "665f1e...",
  "movieId": "665f1c...",
  "room": "A2",
  "startTime": "2025-06-12T10:00:00.000Z"
}
```

#### Xóa suất chiếu (Admin)
```http
DELETE /api/showtime/665f1e...
Authorization: Bearer <admin_token>
```
**Response:**
```json
{
  "message": "Xóa suất chiếu thành công"
}
```

---

### 🎟️ Booking

#### Lấy tất cả booking
```http
GET /api/booking
Authorization: Bearer <token>
```
**Response:**
```json
{
  "data": [
    {
      "_id": "665f1f...",
      "userId": "665f1b...",
      "showtimeId": "665f1e...",
      "seats": ["A1", "A2"],
      "status": "booked"
    }
    // ...
  ],
  "total": 10,
  "page": 1,
  "limit": 10
}
```

#### Lấy chi tiết booking
```http
GET /api/booking/665f1f...
Authorization: Bearer <token>
```
**Response:**
```json
{
  "_id": "665f1f...",
  "userId": "665f1b...",
  "showtimeId": "665f1e...",
  "seats": ["A1", "A2"],
  "status": "booked"
}
```

#### Đặt vé (User)
```http
POST /api/booking
Authorization: Bearer <user_token>
Content-Type: application/json
```
```json
{
  "showtimeId": "665f1e...",
  "seats": ["A1", "A2"]
}
```
**Response:**
```json
{
  "_id": "665f1f...",
  "userId": "665f1b...",
  "showtimeId": "665f1e...",
  "seats": ["A1", "A2"],
  "status": "booked"
}
```

#### Cập nhật booking (Admin)
```http
PUT /api/booking/665f1f...
Authorization: Bearer <admin_token>
Content-Type: application/json
```
```json
{
  "status": "cancelled"
}
```
**Response:**
```json
{
  "_id": "665f1f...",
  "userId": "665f1b...",
  "showtimeId": "665f1e...",
  "seats": ["A1", "A2"],
  "status": "cancelled"
}
```

#### Xóa booking (Admin)
```http
DELETE /api/booking/665f1f...
Authorization: Bearer <admin_token>
```
**Response:**
```json
{
  "message": "Xóa booking thành công"
}
```

---

## Tài khoản mẫu

| Vai trò | Email              | Password   |
|---------|--------------------|------------|
| Admin   | vnd@gmail.com    | 12345678   |
| User    | a@gmail.com    | 12345678   |

**📚 Tài liệu tham khảo & công cụ hỗ trợ**

-[Blog Nodejs/MongoDB Thầy Đạt:](https://letrongdat.vercel.app/nodejs/)

-Công cụ hỗ trợ: Github, ChatGPT, VSCode, MongoDB, Postman


Vũ Như Định

📧 Email: hhit357@gmail.com

🌐 Github: https://github.com/dinhvn224

