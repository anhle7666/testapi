const express = require("express");
const hangHoaController = require("../controllers/hanghoa.controller");

const router = express.Router();

router.get("/hanghoa", hangHoaController.getAllHangHoa);
router.get("/hanghoa/:id", hangHoaController.getHangHoaById);
router.get("/hinhhanghoa/:id", hangHoaController.getHinhHH);
router.get("/hanghoa/search/:tenHH", hangHoaController.timHangHoaTheoTen);
router.post("/hanghoa", hangHoaController.themHH);
router.put("/hanghoa/:id", hangHoaController.suaHH);
router.delete("/hanghoa/:id", hangHoaController.xoaHH);

module.exports = router;
