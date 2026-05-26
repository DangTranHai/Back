const roadmap = {
  MySQL: {
    "buổi 1": "Khai giảng, cài ext cần thiết",
    "Buổi 2:": "MySQL trong Docker, basic CRUD trên database",
    "Buổi 3:": "Query, relationship",
  },
  ExpressJS: {
    "Buổi 4:": "Khởi tạo dự án với ExpressJS, Áp dụng mô hình MVC",
    "Buổi 5:": "Middleware - áp dụng vào dự án",
    "Buổi 6:": "ORM squelize, database first, code first, biến môi trường",
    "Buổi 7:": "Phân trang, filter , ráp FE, CORS",
  },
  Authentication: {
    "Buổi 8:":
      "Đăng ký, đăng nhập, JWT (JSON Web Token), access token, gửi mail",
    "Buổi 9:":
      "Sử dụng Middleware đẻ bảo vệ API, login Google (BE kiểm soát hoàn toàn)",
    "Buổi 10:": "refresh token, demo hack facebook",
    "Buổi 11:": "Upload file local và cloud (Cloudinary)",
    "Buổi 12:": "Swagger API, - GraphQL (cơ bản)",
  },
  Prisma: {
    "buổi 13: ": "SocketIO, chat nhóm và 1-1",
    "Buổi 14:": "khởi tạo source NestJS - cấu trúc dự án NestJS",
    "Buổi 15: ": "Microservices, RabbitMQ",
  },
  NestJS: {
    "Buổi 16:": "memory cache, cache redis",
    "Buổi 17:": "elasticsearch, kibana",
  },
  Docker: {
    "Buổi 18:": "tìm hiểu toàn bộ docker, docker compose",
    "Buổi 19:": "triển khai CICD, map domain",
  },
};

//nhắc lại về callback function, try catch

// {1, 2,3, 4}.map(()=> {})
function login () {
        //kiểm tra thông tin đăng nhập
        // mk: nodejs55 -> mã hóa thông tin -> bcrypt
        //
}
api("/api/login", login)
// npm run start