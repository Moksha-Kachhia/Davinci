const mongoose = require("mongoose");
const mongooseTypeUrl=require('mongoose-type-url');
const Schema = mongoose.Schema;

const clothcombinstance=new Schema({
    season:{type:String,required:true},
    sex:{ type: String, required: true },
    style:{ type: String, required: true },
    name:{ type: String, required: true },
    clothid:[{ type: Schema.ObjectId, ref: "Clothinstance", required: true }] ,
    comb_pic_url:mongooseTypeUrl,
})
clothcombinstance.virtual("url").get(function () {
    return  "/fashion/"+this._id;
  });
module.exports = mongoose.model("FashionInstances", clothcombinstance);