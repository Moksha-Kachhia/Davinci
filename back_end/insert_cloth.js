const { MongoClient } = require("mongodb");
const uri =
      "mongodb+srv://qishenchen:!Cqs041016@cluster0.ddrhrj1.mongodb.net/?retryWrites=true&w=majority"
const fashionInstance= require("./model/fashioninstance");

const Clothinstance= require("./model/clothinstance");
const clothinstance = require("./model/clothinstance");
const client = new MongoClient(uri);

//this page is for insert sample cloth into our database 
await client.connect();

const dbName = "myDatabase";
const collectionName = "clothcombination";

const database = client.db(dbName);
const collection = database.collection(collectionName);
const fashions=[];
const clothinstances=[];
async function fashionCreate(index, season,style,sex,comb_pic_url,clothid) {
  const fashiondetail = {
    season: season,
    style: style,
    sex: sex,
    comb_pic_url: comb_pic_url,
    clothid:clothid
  };

  const fashion = new Book(fashiondetail);
  await fashion.save();
  fashions[index] = fashiondetail;
  console.log(`Added Fashion: ${fashion}`);
}
async function clothCreate(index, pic_url,url,name) {
  const clothinstance_detail = {
    pic_url:pic_url,
    url:url,
    name:name
  };

  const clothinstance = new Clothinstance(clothinstance_detail);
  await clothinstance.save();
  clothinstances[index] = clothinstance;
  console.log(`Added bookinstance: ${name}`);
}  
await function createcloth(){
  console.log("create cloth");
  clothCreate(
    0,
    "https://media.gucci.com/style/DarkGray_Center_0_0_980x980/1683044104/742711_ZANVG_4069_001_100_0000_Light-Oxford-cotton-shirt-with-embroidery.jpg",
    "https://www.gucci.com/us/en/pr/men/ready-to-wear-for-men/shirts-for-men/long-sleeves-shirts-for-men/oxford-cotton-shirt-with-embroidery-p-742711ZANVG4069"
  )
  clothCreate(
    1,
    "https://images.canadagoose.com/image/upload//v1692026967/product-image/4829W_63_o.png",
      "https://www.canadagoose.com/ca/en/rhoda-jacket-4829W.html"
  )
  clothCreate(
    2,

      "https://images.canadagoose.com/image/upload//v1694192197/product-image/4821W_61_o.png" ,
      "https://www.canadagoose.com/ca/en/garnet-puffer-4821W.html"
  )
}
await function createfashion(){
  console.log("create fashion");
  fashionCreate(
    0,
      "man",
      "autumn",
     "Guccishirt1",
      "https://media.gucci.com/style/DarkGray_Center_0_0_980x980/1683155711/742711_ZANVG_4069_002_100_0000_Light-Oxford-cotton-shirt-with-embroidery.jpg",
      [clothinstances[0]]
  ),
  fashionCreate(
    0,
      "woman",
      "winter",
     "canada_goosedownjacket1",
     "https://images.canadagoose.com/image/upload//product-image/4829W_63_fsph.jpg",
      [clothinstances[1]]
  ),
  fashionCreate(
    2,
    "woman",
    "winter",
    "canada_goosejacket2",
    "https://images.canadagoose.com/image/upload//product-image/4821W_61_fsph.jpg",
    [clothinstances[2]]
  )

}
