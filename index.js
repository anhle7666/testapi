// app.js hoặc index.js

const express = require("express");
const cors = require("cors");
const login = require("./src/routes/login.route");
const khachHangRoutes = require("./src/routes/khachhang.route");
const nhanVienRoutes = require("./src/routes/nhanvien.route");
const hangHoaRoutes = require("./src/routes/hanghoa.route");
const datHangRoutes = require("./src/routes/dathang.route");
const chiTietDatHangRoutes = require("./src/routes/chitietdathang.route");

const app = express();

app.use(express.json());
app.use(
    cors({
        origin: "*",
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true,
        optionsSuccessStatus: 200,
    }),
);

app.get("/", (req, res) => {
    res.send({ msg: "welcome" });
});
app.use(login);
app.use(khachHangRoutes);
app.use(nhanVienRoutes);
app.use(hangHoaRoutes);
app.use(datHangRoutes);
app.use(chiTietDatHangRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
