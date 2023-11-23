// models/nhanVienModel.js
const db = require("../db");

class NhanVien {
    static getAll() {
        return new Promise((resolve, reject) => {
            db.query("SELECT * FROM NhanVien", (err, results) => {
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
            db.query("SELECT * FROM NhanVien WHERE MSNV = ?", [id], (err, results) => {
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
            db.query("SELECT * FROM NhanVien WHERE SoDienThoai = ?", [sdt], (err, results) => {
                if (err) {
                    reject(err);
                    return [];
                }
                if (results.length === 0) {
                    resolve([]);
                } else {
                    resolve(results[0]);
                }
            });
        });
    }
}

module.exports = NhanVien;
