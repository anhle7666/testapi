// db.js
const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "sql12.freesqldatabase.com",
    user: "sql12664454",
    password: "WtwjKLAEJP",
    database: "sql12664454",
});

connection.connect((err) => {
    if (err) {
        console.error("Lỗi kết nối đến cơ sở dữ liệu:", err);
    } else {
        console.log("Kết nối đến cơ sở dữ liệu thành công");
    }
});

module.exports = connection;
