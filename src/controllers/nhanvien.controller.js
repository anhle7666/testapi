// controllers/nhanVienController.js
const NhanVien = require('../models/nhanvien.model');

exports.getAllNhanVien = async (req, res) => {
    try {
        const nhanViens = await NhanVien.getAll();
        res.json(nhanViens);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Lỗi trong quá trình lấy thông tin nhân viên.' });
    }
};

exports.getNhanVienById = async (req, res) => {
    const id = req.params.id;

    try {
        const nhanVien = await NhanVien.getById(id);
        if (nhanVien) {
            res.json(nhanVien);
        } else {
            res.status(404).json({ error: 'Nhân viên không tồn tại.' });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Lỗi trong quá trình lấy thông tin nhân viên.' });
    }
};

