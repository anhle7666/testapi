const db = require("../db");

class ChiTietDatHang {
    static getAll() {
        return new Promise((resolve, reject) => {
            db.query("SELECT * FROM ChiTietDatHang", (err, results) => {
                if (err) {
                    reject(err);
                    return;
                }
                resolve(results);
            });
        });
    }

    static getById(id) {
        return new Promise((resolve, reject) => {
            db.query("SELECT * FROM ChiTietDatHang WHERE SoDonDH = ?", [id], (err, results) => {
                if (err) {
                    reject(err);
                    return;
                }
                if (results.length === 0) {
                    resolve(null);
                } else {
                    resolve(results[0]);
                }
            });
        });
    }
    static themChiTietDon(SoDonDH, MSHH, SoLuong, GiaDatHang, GiamGia) {
        return new Promise((resolve, reject) => {
            db.query(
                "INSERT INTO ChiTietDatHang (SoDonDH, MSHH, SoLuong, GiaDatHang, GiamGia) VALUES (?,?,?,?,?)",
                [SoDonDH, MSHH, SoLuong, GiaDatHang, GiamGia],
                (err, results) => {
                    if (err) {
                        reject(err);
                        return;
                    }
                    if (results.length === 0) {
                        resolve(null);
                    } else {
                        resolve(results[0]);
                    }
                },
            );
        });
    }
    // Thêm các phương thức khác cho model của ChiTietDatHang
}

module.exports = ChiTietDatHang;
