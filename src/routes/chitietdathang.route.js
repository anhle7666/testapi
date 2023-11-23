const express = require("express");
const chiTietDatHangController = require("../controllers/chitietdathang.controller");

const router = express.Router();

router.get("/chitietdathang", chiTietDatHangController.getAllChiTietDatHang);
router.get("/chitietdathang/:id", chiTietDatHangController.getChiTietDatHangById);
router.post("/chitietdathang", chiTietDatHangController.themChiTietDon);

module.exports = router;
