var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.set('views',path.join(__dirname,'../frontend/views') )
app.set('view engine', 'pug').
app.use('/public', express.static('public'));

const mongoDB = process.env.MONGODB_URI || dev_db_url;

main().catch((err) => console.log(err));
async function main() {
  await mongoose.connect(mongoDB);
}

app.get('/query_clothcombination.html', function (req, res) {
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
