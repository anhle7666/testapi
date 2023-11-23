// controllers/datHangController.js
const DatHang = require("../models/dathang.model");

exports.getAllDatHang = async (req, res) => {
    try {
        const datHangs = await DatHang.getAll();
        res.json(datHangs);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Lỗi trong quá trình lấy thông tin đặt hàng." });
    }
};

exports.getDatHangById = async (req, res) => {
    const id = req.params.id;

    try {
        const datHang = await DatHang.getById(id);
        if (datHang) {
            res.json(datHang);
        } else {
            res.status(404).json({ error: "Đặt hàng không tồn tại." });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Lỗi trong quá trình lấy thông tin đặt hàng." });
    }
};

exports.createDatHang = async (req, res) => {
    const { MSKH, NgayDH, MSNV } = req.body;

    try {
        const soDonDH = await DatHang.themDonHang(MSKH, MSNV, NgayDH);

        res.status(200).json({ success: true, soDonDH: soDonDH });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Lỗi trong quá trình tạo đơn hàng." });
    }
};
