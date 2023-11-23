const express = require("express");
const loginController = require("../controllers/login.controller");
const router = express.Router();

router.post("/login/nhanvien", async (req, res) => {
    const { username, password } = req.body;
    const nhanVien = await loginController.loginNV(username, password);
    if (nhanVien) {
        if (Object.keys(nhanVien).length === 0) {
            res.status(300).json(nhanVien);
        } else {
            res.status(200).json(nhanVien);
        }
    } else {
        res.status(401).json({ message: "Tên người dùng hoặc mật khẩu không chính xác" });
    }
});

router.post("/login/khachhang", async (req, res) => {
    const { username, password } = req.body;

    const khachHang = await loginController.loginKH(username, password);
    if (khachHang) {
        res.status(200).json(khachHang);
    } else {
        res.status(401).json({ message: "Tên người dùng hoặc mật khẩu không chính xác" });
    }
});

module.exports = router;
