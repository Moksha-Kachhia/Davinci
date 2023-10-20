const { MongoClient } = require("mongodb");
const uri =
      "mongodb+srv://qishenchen:!Cqs041016@cluster0.ddrhrj1.mongodb.net/?retryWrites=true&w=majority"

const client = new MongoClient(uri);

//this page is for insert sample cloth into our database 
await client.connect();

const dbName = "myDatabase";
const collectionName = "clothcombination";

const database = client.db(dbName);
const collection = database.collection(collectionName);

const samples = [
    {
      sex: "man",
      season:"autumn",
      name:"autumn_cloth1",
      cloth:[{pic_url:"https://media.gucci.com/style/DarkGray_Center_0_0_980x980/1683044104/742711_ZANVG_4069_001_100_0000_Light-Oxford-cotton-shirt-with-embroidery.jpg",url:"https://www.gucci.com/us/en/pr/men/ready-to-wear-for-men/shirts-for-men/long-sleeves-shirts-for-men/oxford-cotton-shirt-with-embroidery-p-742711ZANVG4069"}],
      comb_pic_url:"https://media.gucci.com/style/DarkGray_Center_0_0_980x980/1683155711/742711_ZANVG_4069_002_100_0000_Light-Oxford-cotton-shirt-with-embroidery.jpg"
    },
    {
      sex: "woman",
      season:"winter",
      cloth: [{pic_url:"https://images.canadagoose.com/image/upload//v1692026967/product-image/4829W_63_o.png",url:"https://www.canadagoose.com/ca/en/rhoda-jacket-4829W.html"}],
      name:"winter_cloth1",
      comb_pic_url:"https://images.canadagoose.com/image/upload//product-image/4829W_63_fsph.jpg"
    },
    {
      sex: "woman",
      season:"winter",
      cloth:[{pic_url:"https://images.canadagoose.com/image/upload//v1694192197/product-image/4821W_61_o.png" ,
      url:"https://www.canadagoose.com/ca/en/garnet-puffer-4821W.html"}],
      comb_pic_url:"https://images.canadagoose.com/image/upload//product-image/4821W_61_fsph.jpg"
      
    }, 
    
    
  ];

var insert_inf= async function(){
    try {
    const insertManyResult = await collection.insertMany(samples);
    console.log(`${insertManyResult.insertedCount} documents successfully inserted.\n`);
    } catch (err) {
    console.error(`Something went wrong trying to insert the new documents: ${err}\n`);
    }
}
  
  

