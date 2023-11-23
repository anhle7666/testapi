const ChiTietDatHang = require("../models/chitietdathang.model");
const HangHoa = require("../models/hanghoa.model");
exports.getAllChiTietDatHang = async (req, res) => {
    try {
        const chiTietDatHangs = await ChiTietDatHang.getAll();
        res.json(chiTietDatHangs);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Lỗi trong quá trình lấy thông tin chi tiết đặt hàng." });
    }
};

exports.getChiTietDatHangById = async (req, res) => {
    const id = req.params.id;

    try {
        const chiTietDatHang = await ChiTietDatHang.getById(id);
        if (chiTietDatHang) {
            res.json(chiTietDatHang);
        } else {
            res.status(404).json({ error: "Chi tiết đặt hàng không tồn tại." });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Lỗi trong quá trình lấy thông tin chi tiết đặt hàng." });
    }
};

exports.themChiTietDon = async (req, res) => {
    const { SoDonDH, MSHH, SoLuong, GiaDatHang, GiamGia } = req.body.ChiTietDon;

    try {
        const results = await ChiTietDatHang.themChiTietDon(SoDonDH, MSHH, SoLuong, GiaDatHang, GiamGia);
        const hanghoa = await HangHoa.getQuantityById(MSHH);
        const capnhat = await HangHoa.capnhatHH(MSHH, hanghoa.SoLuongHang - 1);
        res.status(200).json();
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Lỗi trong quá trình thêm thông tin chi tiết đặt hàng." });
    }
};
