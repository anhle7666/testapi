// loginController.js
const taiKhoanKhach = require("../models/khachhang.model");
const taiKhoanNhanVien = require("../models/nhanvien.model");

async function loginKH(sdt, pass) {
    const taikhoan = await taiKhoanKhach.getBySDT(sdt);
    if (pass == taikhoan.Password) return taikhoan;
    else return [];
}

async function loginNV(sdt, pass) {
    const taikhoan = await taiKhoanNhanVien.getBySDT(sdt);
    if (pass == taikhoan.Password) return taikhoan;
    else return [];
}

module.exports = { loginKH, loginNV };
