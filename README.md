# Dự án (ckc classroom)

Dự án này bao gồm hai phần: Backend (Laravel) và Frontend (Next.js). Dưới đây là cấu trúc thư mục và hướng dẫn cài đặt chi tiết để chạy ứng dụng trên môi trường phát triển (development).

## Cấu trúc thư mục (Directory Tree)

```text
.
├── backend/                # Laravel API Backend
│   ├── app/                # Chứa mã nguồn cốt lõi của ứng dụng (Models, Controllers,...)
│   ├── bootstrap/          # Các file khởi động ứng dụng Laravel
│   ├── config/             # Các file cấu hình hệ thống
│   ├── database/           # Chứa database migrations, factories và seeders
│   ├── public/             # Thư mục public chứa file index.php và tài nguyên tĩnh
│   ├── resources/          # Chứa views (Blade) và các tài nguyên chưa biên dịch (JS/CSS)
│   ├── routes/             # Chứa định nghĩa các routes (api.php, web.php,...)
│   ├── storage/            # File upload, compiled templates, và logs
│   ├── tests/              # Các bài test (Unit, Feature tests)
│   └── vendor/             # Chứa các thư viện PHP được cài đặt qua Composer
└── frontend/               # Next.js Frontend
    ├── components/         # Các React components có thể tái sử dụng
    ├── public/             # Tài nguyên tĩnh (images, fonts,...)
    └── src/                # Chứa mã nguồn chính (app/pages, styles, hooks,...)
```

## Yêu cầu hệ thống (Prerequisites)

Trước khi bắt đầu, hãy đảm bảo máy tính của bạn đã cài đặt các công cụ sau:
- **PHP** (khuyến nghị >= 8.1)
- **Composer** (Quản lý thư viện PHP)
- **Node.js** (khuyến nghị >= 18.x) và **npm** (hoặc yarn/pnpm)
- **MySQL** hoặc cơ sở dữ liệu tương tự (nếu dự án cần lưu trữ dữ liệu)

---

## Hướng dẫn cài đặt Backend (Laravel)

1. Di chuyển vào thư mục backend:
   ```bash
   cd backend
   ```

2. Cài đặt các thư viện PHP:
   ```bash
   composer install
   ```

3. Tạo file cấu hình môi trường:
   ```bash
   cp .env.example .env
   # Nếu bạn dùng Windows Command Prompt: copy .env.example .env
   ```

4. Cập nhật thông tin kết nối cơ sở dữ liệu trong file `.env`:
   Mở file `.env` và sửa các dòng sau cho phù hợp với database của bạn:
   ```env
   DB_CONNECTION=mysql
   DB_HOST=127.0.0.1
   DB_PORT=3306
   DB_DATABASE=ckc_class
   DB_USERNAME=root
   DB_PASSWORD=
   ```

5. Khởi tạo Application Key:
   ```bash
   php artisan key:generate
   ```

6. Chạy Migration để tạo các bảng trong database (Tùy chọn, nếu có database):
   ```bash
   php artisan migrate
   ```

7. Khởi chạy server development:
   ```bash
   php artisan serve
   ```
   *Backend sẽ chạy ở địa chỉ: http://localhost:8000*

---

## Hướng dẫn cài đặt Frontend (Next.js)

1. Mở một terminal mới (để giữ server backend chạy) và di chuyển vào thư mục frontend:
   ```bash
   cd frontend
   ```

2. Cài đặt các thư viện Node.js:
   ```bash
   npm install
   # Hoặc dùng: yarn install
   ```

3. (Tùy chọn) Cấu hình biến môi trường:
   Nếu thư mục có file `.env.example`, hãy copy thành `.env.local` và cập nhật thông tin API URL để trỏ về backend (thường là `http://localhost:8000/api`).

4. Khởi chạy server development:
   ```bash
   npm run dev
   # Hoặc dùng: yarn dev
   ```
   *Frontend sẽ chạy ở địa chỉ: http://localhost:3000*

## Chạy toàn bộ ứng dụng
Sau khi thực hiện các bước trên, bạn có thể mở trình duyệt và truy cập:
- Frontend: [http://localhost:3000](http://localhost:3000)
- Backend API: [http://localhost:8000](http://localhost:8000)
