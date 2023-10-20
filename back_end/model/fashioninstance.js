const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const clothcombinstance=new Schema({
    season:String,
    sex:String,
    type:String,
    name:String,
    clothid: { type: Schema.ObjectId, ref: "clothId", required: true },
    cloth:[{"pic_url":String,"url":String}],
    clothname:[String],
    comb_pic_url:String
})
module.exports = mongoose.model("fashionInstance", clothcombinstance);
BookInstanceSchema.virtual("url").get(function () {
    return  this.comb_pic_url;
  });
BookInstanceSchema.virtual("clothes").get(function(){
    return this.cloth;
}
);