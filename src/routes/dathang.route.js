const express = require("express");
const datHangController = require("../controllers/dathang.controller");

const router = express.Router();

router.get("/dathang", datHangController.getAllDatHang);
router.get("/dathang/:id", datHangController.getDatHangById);
router.post("/dathang", datHangController.createDatHang);

module.exports = router;
