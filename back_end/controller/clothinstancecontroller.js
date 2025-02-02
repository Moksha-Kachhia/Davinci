const FashionInstance = require("../models/clothinstance");
const { body, validationResult } = require("express-validator");
const asyncHandler = require("express-async-handler");
//this is used for get clothinstance matching clothId from our database`
exports.clothinstance_detail = asyncHandler(async (req, res, next) => {
    const clothInstance = await ClothInstance.findById(req.params.id).exec();
  
    if (clothInstance === null) {
      // No results.
      const err = new Error("cloth copy not found");
      err.status = 404;
      return next(err);
    }
  
    res.render("cloth_detail", {
      title: "related clothes",
      clothinstance: clothInstance
    });
  });


exports.clothinstancebyname_detail = asyncHandler(async (req, res, next) => {
    const clothInstances = await ClothInstance.fuzzySearch(req.name).exec();
  
    if (clothInstances === null) {
      // No results.
      const err = new Error("cloth not found");
      err.status = 404;
      return next(err);
    }
  
    res.render("cloth_list", {
      title: "related clothes",
      clothinstances: clothInstances
    });
  });