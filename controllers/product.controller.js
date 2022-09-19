const { getProductsService, createProductService } = require("../services/Product.service");

exports.getProduct = async (req, res, next) => {
    try {
        const products = await getProductsService();
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