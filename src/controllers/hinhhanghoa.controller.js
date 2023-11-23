const HinhHangHoa = require("../models/hinhhanghoa.model");

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

module.exports = HinhHangHoa;
