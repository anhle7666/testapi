const db = require('../db');

class DatHang {
    static getAll() {
        return new Promise((resolve, reject) => {
            db.query('SELECT * FROM DatHang', (err, results) => {
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
            db.query('SELECT * FROM DatHang WHERE SoDonDH = ?', [id], (err, results) => {
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

    static themDonHang(MSKH, MSNV, NgayDH, NgayGH) {

        return new Promise((resolve, reject) => {
            db.query('INSERT INTO DatHang (MSKH, MSNV, NgayDH, NgayGH, TrangthaiDH) VALUES (?, ?, ?, ?, "Chưa Xử Lí")', [MSKH, MSNV, NgayDH, NgayGH], (err, results) => {
                if (err) {
                    reject(err);
                    return;
                }
                resolve(results.insertId); 
            });
        });
    }


}

module.exports = DatHang;
