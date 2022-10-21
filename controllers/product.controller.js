const { getProductsService, createProductService } = require("../services/Product.service");
const Product = require('../models/Product');

exports.getProduct = async (req, res, next) => {
    try {
        const products = await getProductsService();
        // const products = await Product.find({});
        // const products = await Product.findById('6327bf190b4505415f07dffe');
        // const products = await Product.where('name').equals('Apple1');
        // const products = await Product.where('quantity').gt(0).lt(100);
        // const products = await Product.find({}).select({ name: 1 });
        // const products = await Product.find({}).limit(1);
        // const products = await Product.find({}).sort({ quantity: -1 });
        // const products = await Product.find({}).sort({ quantity: 1 });
        // const products = await Product.find({}, 'name quantity');
        // const products = await Product.find({}, '-name -quantity');
        // const products = await Product.find({ status: { $eq: "out-of-stock" } });
        // const products = await Product.find({ status: { $ne: "out-of-stock" } });
        // const products = await Product.find({ quantity: { $gt: 100 } });
        // const products = await Product.find({ quantity: { $gte: 100 } });
        // const products = await Product.find({ quantity: { $lt: 100 } });
        // const products = await Product.find({ quantity: { $lte: 100 } });
        // const products = await Product.find({ name: { $in: ["Apple", "Apple1"] } });
        // const products = await Product.find({ $or: [{ _id: "6327bdc70b4505415f07dffa" }, { name: 'chal' }] });
        res.status(200).json({
            status: 'Successful',
            data: products
        })
    } catch (error) {
        res.status(400).json({
            status: "failed",
            message: "Can't get data",
            error: error.message
        })
    }
};

exports.createProduct = async (req, res, next) => {
    try {
        // Create data
        const result = await createProductService(req.body)

        // save data
        // const product = new Product(req.body)
        // if (product.quantity === 0) {
        //     product.status = "out-of-stock"
        // }
        // const result = await product.save()

        res.status(200).json({
            status: "success",
            message: "Data inserted successfully",
            data: result
        })
    } catch (error) {
        res.status(400).json({
            status: "failed",
            message: "Data is not inserted",
            error: error.message
        })
    }
};


exports.updateProduct = async (req, res, next) => {
    try {
        // update data
        const {id}=req.params;
        const result = await Product.updateOne({_id:id},{$set:req.body})

        res.status(200).json({
            status: "success",
            message: "Data update successfully"
        })
    } catch (error) {
        res.status(400).json({
            status: "failed",
            message: "Data did not updated",
            error: error.message
        })
    }
};


/* 
const {
    getToursService,
    createTourservice,
    getTourDetailService,
    updateTourService,
    getThreeCheapestToursService,
    getThreeTrendingToursService,
  } = require("../services/Tour.services");
  
  //Getting All Tours
  exports.getTours = async (req, res, next) => {
    const queryFilter = { ...req.query };
  
    const excluedFields = ["limit", "sort", "page"];
    excluedFields.forEach((field) => delete queryFilter[field]);
  
    const queries = {};
  
    if (req.query.sort) {
      const sortBy = req.query.sort.split(",").join(" ");
      queries.sortBy = sortBy;
      console.log(sortBy);
    }
    if (req.query.fields) {
      const fieldsBy = req.query.fields.split(",").join(" ");
      queries.fieldsBy = fieldsBy;
      console.log(fieldsBy);
    }
    if (req.query.page) {
      const { page = 1, limit = 3 } = req.query;
      const skip = (page - 1) * parseInt(limit);
      queries.skip = skip;
      queries.limit = parseInt(limit);
    }
    const tours = await getToursService(queryFilter, queries);
  
    try {
      res.status(200).json({ status: "Success!", data: tours });
    } catch (error) {
      res.status(400).json({ status: "Failed", error: error.message });
    }
  };
  
  exports.createTours = async (req, res, next) => {
    try {
      //Save or Create Tours
      const result = await createTourservice(req.body);
      res.status(200).json({
        status: "Success",
        message: "Data inserted successfully!",
        data: result,
      });
    } catch (error) {
      res.status(400).json({
        status: "Failed",
        message: "Data is not inserted",
        error: error.message,
      });
    }
  };
  
  //Getting Tour Details
  exports.tourDetails = async (req, res, next) => {
    const { id } = req.params;
    const detail = await getTourDetailService(id);
    try {
      res.status(200).json({ status: "Success!", data: detail });
    } catch (error) {
      res.status(400).json({ status: "Failed", error: error.message });
    }
  };
  
  //Updating Tour
  exports.updateTour = async (req, res, next) => {
    try {
      const { id } = req.params;
      const updatedItem = await updateTourService(id, req.body);
      res.status(200).json({
        status: "Success",
        message: "Data updated into  successfully!",
        data: updatedItem,
      });
    } catch (error) {
      res.status(400).json({
        status: "Failed",
        message: "Data is not Updated",
        error: error.message,
      });
    }
  };
  
  //Getting Top 3 Cheapest Tours
  exports.getThreeCheapestTours = async (req, res, next) => {
    const tours = await getThreeCheapestToursService(req.query);
  
    try {
      res.status(200).json({ status: "Success!", data: tours });
    } catch (error) {
      res.status(400).json({ status: "Failed", error: error.message });
    }
  };
  //Getting Top 3 Trending Tours
  exports.getThreeTrendingTours = async (req, res, next) => {
    const tours = await getThreeTrendingToursService(req.query);
  
    try {
      res.status(200).json({ status: "Success!", data: tours });
    } catch (error) {
      res.status(400).json({ status: "Failed", error: error.message });
    }
  }; */