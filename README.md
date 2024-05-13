# Hướng dẫn run project backend

- các api sử dụng trong source :
- http://localhost:3000/api/be/access/login,

- http://localhost:3000/api/be/access/signUp

- Thực hiện các bước sau để run backend:
cd Q3,
npm install để khởi động node_modules
- Vào MySQL tạo schema: backend, vào 2 file knexfile.js và knex.js -> đổi password,
Thực hiện migration vào mysql với câu lệnh như sau:

knex migrate:make user,
- sau đó copy file user.js có sẳn ở folder migrations vào file mới user để tạo table trong mysql,
-> knex migrate:latest,


===> chạy dự án: npm run start