const Product = require('../models/Product');

exports.getProductsService = async () => {
    const products = await Product.find({});
    return products
}

exports.createProductService = async (data) => {
    const product = await Product.create(data)
    return product;
}

exports.updateProductService = async (productId,data) => {
    // const product = await Product.updateOne({_id:productId},{$set:data},{runValidators:true})

    const product=await Product.findById(productId);
    const result=await product.set(data).save();
    return result;
}

exports.bulkUpdateProductService = async (data) => {
  /*   const product = await Product.updateMany({_id:data.ids},data.data,{
      runValidators:true
    });
    return product; */

    const products=[];
    data.ids.forEach(product=>{
      products.push(Product.updateOne({_id:product.id},product.data))
    });
    const result=await Promise.all(products);
    return result;

};

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