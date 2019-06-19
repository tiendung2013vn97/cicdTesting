var express = require('express'),// thiet ke cac lop trung gian, dinh nghia router cho hpep cac hanh dong khac nhau dua tren http,url, tra ve cac trang html
    bodyParser = require('body-parser'),//lop trung gian xu ly JSON text ma hoa ..
    morgan = require('morgan'),// ghi ra cac su kien 
    cors = require('cors');// ho tro ket noi tu dong dien cac parameter 


var app = express();
var sanphamCtrl = require('./controller/sanpham');


app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
    res.json({
        msg: 'hello from nodejs express api'
    })
});
app.use('/sanpham',sanphamCtrl);

var port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`QLBH API is running on port ${port}`);
})