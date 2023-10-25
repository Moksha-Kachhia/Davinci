const FashionInstances = require("../model/fashioninstance");

const asyncHandler = require("express-async-handler");
//this is used for get clothinstance matching clothId from our database`
exports.fashioninstancebyid_detail = asyncHandler(async (req, res, next) => {
    const fashionInstance = await FashionInstances.findById(req.params.id).populate("clothid").exec();
    if (fashionInstance === null) {
      // No results.
      const err = new Error("cloth combination not found");
      err.status = 404;
      return next(err);
    }
    console.log(fashionInstance);
    res.render("select_cloth", {
      title: fashionInstance.name,
      fashioninstance: fashionInstance,
    });
  });
exports.fashioninstance_detail = asyncHandler(async (req, res, next) => {
    const all_fashionInstances =await 
      FashionInstances.find({$and:[{sex:req.query.sex},{season:req.query.season}]}).exec();
    console.log(all_fashionInstances);
    if (all_fashionInstances === null) {
      // No results.
      const err = new Error("cloth combination not found");
      err.status = 404;
      return next(err);
    }
    res.render("select_fashion_instance", {
      title: "related fashion combination",
      fashioninstances: all_fashionInstances,
  });
});

exports.fashioninstancebycloth = asyncHandler(async (req, res, next) => {
  fashionInstances=await Promise.all(FashionInstances.find({ 
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
  
    res.render("select_fashion_instance_byid", {
      title: "related fashion combination",
      fashioninstances: fashionInstances,
    });
  });
