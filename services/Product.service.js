const Product = require('../models/Product');

exports.getProductsService = async () => {
    const products = await Product.find({});
    return products
}

exports.createProductService = async (data) => {
    const product = await Product.create(data)
    return product;
}

/* const Tour = require("../models/Tour");

exports.getToursService = async (filters, queries) => {
  const tour = await Tour.find()
    .skip(queries.skip)
    .limit(queries.limit)
    .select(queries.fieldsBy)
    .sort(queries.sortBy);

  const totalTours = await Tour.countDocuments(filters);
  const pageCount = Math.ceil(totalTours / queries.limit);
  return { totalTours, tour };
};

exports.createTourservice = async (data) => {
  const tour = await Tour.create(data);
  return tour;
};

exports.getTourDetailService = async (dataId) => {
  const detail = await Tour.findOne({ _id: dataId });
  return detail;
};

//Update Tour
exports.updateTourService = async (dataId, data) => {
  const tour = await Tour.updateOne(
    { _id: dataId },
    { $set: data },
    { runValidators: true }
  );
  return tour;
};

//Get three cheapest tours service
exports.getThreeCheapestToursService = async (query) => {
  const tour = await Tour.find({ price: { $lt: 7000 } })
    .limit(3)
    .sort({ price: 1 });
  return tour;
};
//Get three trending tours service
exports.getThreeTrendingToursService = async (query) => {
  const tour = await Tour.find().limit(3);
  return tour;
}; */