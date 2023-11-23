const db = require("../db");

class KhachHang {
    static getAll() {
        return new Promise((resolve, reject) => {
            db.query("SELECT * FROM KhachHang", (err, results) => {
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
            db.query("SELECT * FROM KhachHang WHERE MSKH = ?", [id], (err, results) => {
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
    static getBySDT(sdt) {
        return new Promise((resolve, reject) => {
            db.query("SELECT * FROM KhachHang WHERE SoDienThoai = ?", [sdt], (err, results) => {
                if (err) {
                    reject(err);
                    return [];
                }
                if (results.length === 0) {
                    resolve(null);
                } else {
                    resolve(results[0]);
                }
            });
        });
    }
}

module.exports = KhachHang;
