const mongoose = require("mongoose");
const type_url=require('mongoose-type-url');
const Schema = mongoose.Schema;
const mongoose_fuzzy_searching = require('mongoose-fuzzy-searching');
const clothinstance=new Schema({
    pic_url:type_url,
    shopping_url:type_url,
    name:{type:String,required:true},
    fashionid:[{ type: Schema.ObjectId, ref: "fashioninstance", required: false}]
})
clothinstance.virtual("url").get(function () {
    return "/cloth/"+this._id; 
  });

clothinstance.plugin(mongoose_fuzzy_searching, { fields: ['name'] });
module.exports = mongoose.model("Clothinstance", clothinstance);