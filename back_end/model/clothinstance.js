const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const mongoose_fuzzy_searching = require('mongoose-fuzzy-searching');
const clothinstance=new Schema({
    pic_url:String,
    shopping_url:String,
    name:String,
    fashionid:[{ type: Schema.ObjectId, ref: "fashioninstance", required: false}]
})
clothinstance.plugin(timestamps);
BookInstanceSchema.virtual("url").get(function () {
    return "/catalog/cloth/"+this._id; 
  });

clothinstance.plugin(mongoose_fuzzy_searching, { fields: ['name'] });
module.exports = mongoose.model("Clothinstance", clothinstance);