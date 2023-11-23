const express = require('express');
const khachHangController = require('../controllers/khachhang.controller');

const router = express.Router();

router.get('/khachhang', khachHangController.getAllKhachHang);
router.get('/khachhang/:id', khachHangController.getKhachHangById);

module.exports = router;
