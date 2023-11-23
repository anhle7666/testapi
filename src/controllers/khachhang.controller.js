const KhachHang = require("../models/khachhang.model");

exports.getAllKhachHang = async (req, res) => {
    try {
        const khachHangs = await KhachHang.getAll();
        res.json(khachHangs);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Lỗi trong quá trình lấy thông tin khách hàng." });
    }
};

exports.getKhachHangById = async (req, res) => {
    const id = req.params.id;

    try {
        const khachHang = await KhachHang.getById(id);
        if (khachHang) {
            res.json(khachHang);
        } else {
            res.status(404).json({ error: "Khách hàng không tồn tại." });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Lỗi trong quá trình lấy thông tin khách hàng." });
    }
};
