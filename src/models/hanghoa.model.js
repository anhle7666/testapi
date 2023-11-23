const db = require("../db");

class HangHoa {
    static getAll() {
        return new Promise((resolve, reject) => {
            db.query("SELECT * FROM HangHoa", (err, results) => {
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
            db.query("SELECT * FROM HangHoa WHERE MSHH = ?", [id], (err, results) => {
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

    static getQuantityById(id) {
        return new Promise((resolve, reject) => {
            db.query("SELECT SoLuongHang FROM HangHoa WHERE MSHH = ?", [id], (err, results) => {
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

    static capnhatHH(id, soluong) {
        return new Promise((resolve, reject) => {
            db.query("UPDATE HangHoa SET SoLuongHang = ? WHERE MSHH = ?", [soluong, id], (err, results) => {
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

    static themHH(tenHH, gia, soluong) {
        return new Promise((resolve, reject) => {
            const query = "INSERT INTO HangHoa (TenHH, Gia, SoLuongHang) VALUES (?, ?, ?)";
            db.query(query, [tenHH, gia, soluong], (err, results) => {
                if (err) {
                    reject(err);
                    return;
                }
                resolve(results.insertId);
            });
        });
    }

    static suaHH(MSHH, tenHH, gia, soLuong) {
        return new Promise((resolve, reject) => {
            const query = "UPDATE HangHoa SET TenHH = ?, Gia = ?, SoLuongHang = ? WHERE MSHH = ?";
            db.query(query, [tenHH, gia, soLuong, MSHH], (err, results) => {
                if (err) {
                    reject(err);
                    return;
                }
                if (results.affectedRows === 0) {
                    resolve(null);
                } else {
                    resolve(results);
                }
            });
        });
    }

    static xoaHH(id) {
        return new Promise((resolve, reject) => {
            const query = "DELETE FROM HangHoa WHERE MSHH = ?";
            db.query(query, [id], (err, results) => {
                if (err) {
                    reject(err);
                    return;
                }
                if (results.affectedRows === 0) {
                    resolve(null);
                } else {
                    resolve(results);
                }
            });
        });
    }

    static timHangHoaTheoTen(tenHH) {
        return new Promise((resolve, reject) => {
            const query = "SELECT * FROM HangHoa WHERE TenHH LIKE ?";
            db.query(query, [`%${tenHH}%`], (err, results) => {
                if (err) {
                    reject(err);
                    return;
                }
                resolve(results);
            });
        });
    }
}

module.exports = HangHoa;
