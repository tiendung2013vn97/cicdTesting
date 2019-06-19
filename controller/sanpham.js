var express = require('express');
var sanphamrepo = require('./../repo/sprepo');
var stringSimilarity = require('string-similarity');

var router = express.Router();

String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
};


router.post('/infobyid', (req, res) => {
    var name = req.body.masanpham;
    sanphamrepo.getbyID(+name).then(row => {
            if (row.length == 0) {
                res.json({});
            } else {

                var sp = row[0];


                res.json(sp);

            }

        })
        .catch(err => {
            res.json({
                err: "error"
            });
        })
})
router.get('/image', (req, res) => {

    var id = req.query.id;

    res.sendFile(id, { root: "public" });
})

router.get('/all', (req, res) => {
    sanphamrepo.getall().then(row => {
            res.json(row);
        })
        .catch(err => {
            res.json({
                err: "error"
            });
        })
})


router.post('/maloai', (req, res) => {
    var name = req.body.maloaisp;
    sanphamrepo.getbyMaloaisp(+name).then(rows => {
            res.json(rows);
        })
        .catch(err => {
            res.json({
                err: "error"
            });
        })
})

router.post('/similarName', (req, res) => {
    var name = req.body.tensanpham;
        //name=name.replaceAll("-"," ");
    console.log(name);
    sanphamrepo.getall().then(rows => {
            var arr= [] ;
            for (i = 0; i < rows.length; i++) {
                var string = '' + rows[i].Tensp;
                string=string.toLowerCase();
                name=name.toLowerCase();
                if (string.includes(name)) {

                    arr.push(rows[i]);
                }


            }
            res.json({
                arr:arr
            });
        })
        .catch(err => {
            res.json({
                err: "error"
            });
        })
})
module.exports = router;