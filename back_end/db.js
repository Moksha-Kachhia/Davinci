const fashionInstance = require("./model/fashioninstance");

const mongoose = require("mongoose");
const uri =
      "mongodb+srv://qishenchen:!Cqs041016@cluster0.ddrhrj1.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.Promise = global.Promise;
exports.index=asyncHandler(async (req,res,next)=>{
  
})