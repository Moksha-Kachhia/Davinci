var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })
 
app.use('/public', express.static('public'));
 
app.get('/index.html', function (req, res) {
   res.sendFile("select.html",{root: __dirname+ "/../frontend/" });
})
 
app.get('/select_type',  function (req, res) {
 
   var response = {
       "sex":req.query.sex,
       "season":req.query.season
   };

   res.end(JSON.stringify(response));
})
app.get('/search_result', function(req,res,next){
   
});
 
var server = app.listen(8081, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("http://%s:%s", host, port)
 
})
