var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path=require("path")
var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.set('views',path.join(__dirname,'../frontend/views') )
app.set('view engine', 'pug');
const uri =
      "mongodb+srv://qishenchen:PkviUPwMmfTFQVEP@cluster0.ddrhrj1.mongodb.net/?retryWrites=true&w=majority"
const mongoDB = process.env.MONGODB_URI || uri;
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const insert_cloth=require("./insert_cloth")
main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(mongoDB);
//  const collections = await mongoose.connection.db.collections();
//  for (let collection of collections) {
//       // note: collection.remove() has been depreceated.        
//       await collection.deleteOne(); 
//  }
//  insert_cloth.run_insert_data();
}

const fashion_instance =require("./controller/fashioninstancecontroller")
const cloth_instance =require("./controller/clothinstancecontroller")
app.get('/query_clothcombination.html', function (req, res) {
   res.sendFile("select.html",{root: __dirname+ "/../frontend/" });
})
app.get('/query_cloth.html', function (req, res) {
  res.sendFile("cloth_select.html",{root: __dirname+ "/../frontend/" });
}) 
app.get('/select_type',  fashion_instance.fashioninstance_detail);
app.get('/fashion/:id',  fashion_instance.fashioninstancebyid_detail);

app.get('/cloth_select',  cloth_instance.clothinstancebyname_detail);
app.get('/cloth/:id',  cloth_instance.clothinstance_detail);
//app.use("/catalog", catalogRouter);
app.use(function (req, res, next) {
  next(createError(404));
});
var server = app.listen(8081, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("http://%s:%s", host, port)
 
})
