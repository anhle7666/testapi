const db = require("../db");

class HinhHangHoa {
    static getAll() {
        return new Promise((resolve, reject) => {
            db.query("SELECT * FROM HinhHangHoa", (err, results) => {
                if (err) {
                    reject(err);
                    return;
                }
                resolve(results);
            });
        });
    }

    static getByImagesId(id) {
        return new Promise((resolve, reject) => {
            db.query("SELECT * FROM HinhHangHoa WHERE MSHH = ?", [id], (err, results) => {
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
}

module.exports = HinhHangHoa;
