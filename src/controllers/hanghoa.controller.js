const HangHoa = require("../models/hanghoa.model");
const HinhHangHoa = require("../models/hinhhanghoa.model");

exports.getAllHangHoa = async (req, res) => {
    try {
        const hangHoa = await HangHoa.getAll();
        res.json(hangHoa);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Lỗi trong quá trình lấy thông tin hàng hóa." });
    }
};

exports.getHangHoaById = async (req, res) => {
    const id = req.params.id;

    try {
        const hangHoa = await HangHoa.getById(id);

        if (hangHoa) {
            res.json(hangHoa);
        } else {
            res.status(404).json({ error: "Hàng hóa không tồn tại." });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Lỗi trong quá trình lấy thông tin hàng hóa." });
    }
};
exports.themHH = async (req, res) => {
    try {
        const { TenHH, Gia, SoLuongHang } = req.body;
        const hangHoa = await HangHoa.themHH(TenHH, Gia, SoLuongHang);
        if (hangHoa) {
            res.json(hangHoa);
        } else {
            res.status(404).json({ error: "Hàng hóa đã tồn tại." });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Lỗi trong quá trình thêm hàng hóa." });
    }
};

exports.suaHH = async (req, res) => {
    try {
        const MSHH = req.params.id;
        const { TenHH, Gia, SoLuongHang } = req.body;
        const hangHoa = await HangHoa.suaHH(MSHH, TenHH, Gia, SoLuongHang);
        if (hangHoa) {
            res.json(hangHoa);
        } else {
            res.status(404).json({ error: "Hàng hóa không tồn tại." });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Lỗi trong quá trình cập nhật hàng hóa." });
    }
};

exports.xoaHH = async (req, res) => {
    try {
        const MSHH = req.params.id;
        const hangHoa = await HangHoa.xoaHH(MSHH);
        if (hangHoa) {
            res.json(hangHoa);
        } else {
            res.status(404).json({ error: "Hàng hóa không tồn tại." });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Lỗi trong quá trình cập nhật hàng hóa." });
    }
};

exports.getHinhHH = async (req, res) => {
    const id = req.params.id;
    try {
        const hinh = await HinhHangHoa.getByImagesId(id);
        if (hinh) {
            res.json(hinh);
        } else {
            res.status(404).json({ error: "Hình hàng hóa không tồn tại." });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Lỗi trong quá trình lấy hình hàng hóa." });
    }
};

exports.timHangHoaTheoTen = async (req, res) => {
    try {
        const tenHH = req.params.tenHH;
        const hangHoa = await HangHoa.timHangHoaTheoTen(tenHH);

        if (hangHoa.length > 0) {
            res.json(hangHoa);
        } else {
            res.status(404).json({ error: "Không tìm thấy hàng hóa nào." });
        }
    } catch (error) {
        console.error("Lỗi khi tìm hàng hóa theo tên:", error);
        res.status(500).json({ error: "Lỗi trong quá trình tìm hàng hóa." });
    }
};
