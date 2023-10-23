const FashionInstance = require("../models/fashioninstance");
const { body, validationResult } = require("express-validator");
const asyncHandler = require("express-async-handler");
//this is used for get clothinstance matching clothId from our database`
exports.fashioninstance_detail = asyncHandler(async (req, res, next) => {
    const fashionInstance = await FashionInstance.findById(req.params.id).populate("Clothinstance").exec();
    if (fashionInstance === null) {
      // No results.
      const err = new Error("cloth combination not found");
      err.status = 404;
      return next(err);
    }
  
    res.render("select_cloth", {
      title: fashionInstancename.name,
      fashioninstance: fashionInstance,
    });
  });
exports.fashioninstance_detail = asyncHandler(async (req, res, next) => {
    const fashionInstance = await Promise(
      FashionInstance.find(
        {sex:req.body.sex},{style:req.body.style},{season:req.body.season}).exec());
    if (fashionInstance === null) {
      // No results.
      const err = new Error("cloth combination not found");
      err.status = 404;
      return next(err);
    }
  
    res.render("selected_fashion_instance", {
      title: "related fashion combination",
      fashioninstances: fashionInstances,
  });
});


exports.fashioninstancebycloth = asyncHandler(async (req, res, next) => {
  fashionInstances=await Promise.all(FashionInstance.find({ 
    clothid: { 
       $elemMatch: { id: req.body.id } 
    }
  }) .exec());

    if (fashionInstances === null) {
      // No results.
      const err = new Error("cloth not found");
      err.status = 404;
      return next(err);
    }
  
    res.render("selected_fashion_instance", {
      title: "related fashion combination",
      fashioninstances: fashionInstances,
    });
  });
