var mysql = require('mysql');
// tao ket noi
var createConnection = () => {
    return mysql.createConnection({
        host: 'localhost',
        port: '3306',
        user: 'root',
        password: '',
        database: 'cicdTesing'
    });
}

exports.load = sql => {
    return new Promise((resolve, reject) => {  //cai dat theo thu tu goi ham 
        var cn = createConnection(); // mo ket noi
        cn.connect();// ket noi toi server
        cn.query(sql, (err, rows, fields) => { // query
            if (err) { // thong bao loi
                reject(err); // that bai
            } else {
                resolve(rows); // thanh cong
            }
        
            cn.end();// dong ket noi
        });
    });
}
exports.save = sql => {
    return new Promise((resolve, reject) => {
        var cn = createConnection();
        cn.connect();

        cn.query(sql, function(error, value) {
            if (error) {
                reject(error);
            } else {
                resolve(value);
            }

            cn.end();
        });
    });
}