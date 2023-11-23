const express = require('express');
const nhanVienController = require('../controllers/nhanvien.controller');

const router = express.Router();

router.get('/nhanvien', nhanVienController.getAllNhanVien);
router.get('/nhanvien/:id', nhanVienController.getNhanVienById);

module.exports = router;
