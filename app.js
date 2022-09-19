const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

// Middlewares
app.use(cors());
app.use(express.json());

// Schema Design
const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please provide a name for this product"],
        trim: true,
        unique: [true, "Name must be unique"],
        minLength: [3, "Name must be at least 3 characters."],
        maxLength: [100, "Name is too long."]
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        min: [0, "Price can't be negative"]
    },
    unit: {
        type: String,
        required: true,
        enum: {
            values: ["kg", "litter", "pcs"],
            message: "unit value can't be {VALUE}, must be kg/litter/pcs"
        }
    },
    quantity: {
        type: Number,
        required: true,
        min: [0, "quantity can't be negative."],
        validate: {
            validator: (value) => {
                const isInteger = Number.isInteger(value);
                if (isInteger) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        message: "Quantity must be an integer."
    },
    status: {
        type: String,
        required: true,
        enum: {
            values: ["in-stock", "out-of-stock", "discontinued"],
            message: "status can't be {VALUE}"
        }
    },
    // supplier:{
    //    type:mongoose.Schema.Types.ObjectId,
    //    ref:"supplier"
    // },
    // categories:[{
    //     name:{
    //         type:String,
    //         required:true
    //     },
    //     _id: mongoose.Schema.Types.ObjectId
    // }]

}, { timestamps: true });

// SCHEMA -> MODEL -> QUERY
const Product = mongoose.model("Product", productSchema)

app.get("/", (req, res) => {
    res.send("Route is Running");
});

// posting data in database
app.post("/api/v1/product", async (req, res, next) => {
    try {
        // Create data
        // const result = await Product.create(req.body)

        // save data
        const product = new Product(req.body)
        if (product.quantity === 0) {
            product.status = "out-of-stock"
        }
        const result = await product.save()

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
});

app.get('/api/v1/product', async (req, res, next) => {
    try {
        const products = await Product.find({});
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
            message: "Data is not inserted",
            error: error.message
        })
    }
})

module.exports = app;