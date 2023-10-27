const mongoose = require("mongoose");
const uri =
      "mongodb+srv://qishenchen:PkviUPwMmfTFQVEP@cluster0.ddrhrj1.mongodb.net/?retryWrites=true&w=majority"
const fashions=[];
const clothinstances=[];
const FashionInstance=require("./model/fashioninstance")
const Clothinstance=require("./model/clothinstance");
async function fashionCreate(index, season,style,sex,name,comb_pic_url,clothid) {
  const fashiondetail = {
    season: season,
    style: style,
    sex: sex,
    name:name,
    comb_pic_url: comb_pic_url,
    clothid:clothid,
  };

  const fashion = new FashionInstance(fashiondetail);
  await fashion.save();
  fashions[index] = fashion;
  console.log(`Added Fashion: ${name}`);
}
async function clothCreate(index, pic_url,shopping_url,name) {
  const clothinstance_detail = {
    pic_url:pic_url,
    shopping_url:shopping_url,
    name:name,
  };

  const clothinstance = new Clothinstance(clothinstance_detail);
  await clothinstance.save();
  clothinstances[index] = clothinstance;
  console.log(`Added clothinstance: ${name}`);
}  
async function createcloth(){
  console.log("create cloth");
  await Promise.all([
  clothCreate(
    0,
    "https://media.gucci.com/style/DarkGray_Center_0_0_980x980/1683044104/742711_ZANVG_4069_001_100_0000_Light-Oxford-cotton-shirt-with-embroidery.jpg",
    "https://www.gucci.com/us/en/pr/men/ready-to-wear-for-men/shirts-for-men/long-sleeves-shirts-for-men/oxford-cotton-shirt-with-embroidery-p-742711ZANVG4069",
    "shirt1"
    ),
  clothCreate(
    1,
    "https://images.canadagoose.com/image/upload//v1692026967/product-image/4829W_63_o.png",
      "https://www.canadagoose.com/ca/en/rhoda-jacket-4829W.html",
      "downjacket1"
  ),
  clothCreate(
    2,
      "https://images.canadagoose.com/image/upload//v1694192197/product-image/4821W_61_o.png" ,
      "https://www.canadagoose.com/ca/en/garnet-puffer-4821W.html","downjacket2"
  ),
  clothCreate(
    3,
    "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/96b24ebd-aeb7-4d38-8d79-915ed38b33da/sportswear-tech-fleece-og-loose-cape-dgKpCv.png",
    "https://www.nike.com/ca/t/sportswear-tech-fleece-og-loose-cape-dgKpCv/FN4164-063","Nike Sportswear Tech Fleece OG",
  ),
  clothCreate(
    4,
    "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/15402edd-f7c9-4a0a-9e9b-4ed159cc16a1/sportswear-phoenix-fleece-high-waisted-oversized-tracksuit-bottoms-gQHSKp.png",
    "https://www.nike.com/ca/t/sportswear-phoenix-fleece-high-waisted-oversized-tracksuit-bottoms-gQHSKp/DV4919-063","Nike Sportswear Phoenix Fleece"
  )
  ]);
  
}
async function createfashion(){
  console.log("create fashion");
  await Promise.all([
  fashionCreate(
    0,
      "autumn",
      'casual',
      "man",
     "Guccishirt1",
      "https://media.gucci.com/style/DarkGray_Center_0_0_980x980/1683155711/742711_ZANVG_4069_002_100_0000_Light-Oxford-cotton-shirt-with-embroidery.jpg",
      [clothinstances[0]]
  ),
  fashionCreate(
    1,
      "winter",
      'bussiness',
      "woman",
     "canada_goosedownjacket1",
     "https://images.canadagoose.com/image/upload//product-image/4829W_63_fsph.jpg",
      [clothinstances[1]]
  ),
  fashionCreate(
    2,
    "winter","casual",
    "woman",
    "canada_goosejacket2",
    "https://images.canadagoose.com/image/upload//product-image/4821W_61_fsph.jpg",
    [clothinstances[2]]
  ),
  fashionCreate(
    3,
    "autumn","casual","woman","nike sports",
    "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8c7b0568-997f-48a6-b392-62ac510806a0/sportswear-tech-fleece-og-loose-cape-dgKpCv.png",
    [clothinstances[3],clothinstances[4]]
  )
  ]);
}
exports.run_insert_data=async function(){
  await mongoose.connect(uri);
  console.log("connect");
  await createcloth();
  await createfashion();

  Clothinstance.findByIdAndUpdate(clothinstances[0],{fashionid:[fashions[0]]});
  Clothinstance.findByIdAndUpdate(clothinstances[2],{fashionid:[fashions[2]]});
  Clothinstance.findByIdAndUpdate(clothinstances[1],{fashionid:[fashions[1]]});
  Clothinstance.findByIdAndUpdate(clothinstances[3],{fashionid:[fashions[4]]});
  Clothinstance.findByIdAndUpdate(clothinstances[3],{fashionid:[fashions[3]]});
}
