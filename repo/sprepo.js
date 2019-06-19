var db = require('./../fn/mysql-db');


exports.getbyID = ID => {
    var sql = `select * from sanpham sp, Loaisp lsp where sp.Masp = '${ID}' and sp.Loaisp=lsp.Maloaisp`;
    return db.load(sql);
}

exports.getall = () => {
    var sql = `select * from sanpham sp, Loaisp lsp where sp.Loaisp=lsp.Maloaisp`;
    return db.load(sql);
}

exports.getbyMaloaisp = ID => {
    var sql = `select * from sanpham sp, Loaisp lsp where lsp.Maloaisp = '${ID}' and sp.Loaisp=lsp.Maloaisp`;
    return db.load(sql);
}
