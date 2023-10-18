var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })
 
app.use('/public', express.static('public'));
 
app.get('/index.html', function (req, res) {
   res.sendFile("select.html",{root: __dirname+ "/../frontend/" });
})
 
app.get('/select_type',  function (req, res) {
 
   // 输出 JSON 格式
   var response = {
       "sex":req.query.sex,
       "season":req.query.season
   };
   console.log(req);
   res.end(JSON.stringify(response));
})
 
var server = app.listen(8081, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("http://%s:%s", host, port)
 
})