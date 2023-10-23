const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const clothcombinstance=new Schema({
    season:String,
    sex:String,
    style:String,
    name:String,
    clothid:[{ type: Schema.ObjectId, ref: "Clothinstance", required: true }] ,
    comb_pic_url:String
})
BookInstanceSchema.virtual("url").get(function () {
    return  "/catalog/fashion"+this._id;
  });
module.exports = mongoose.model("fashionInstance", clothcombinstance);