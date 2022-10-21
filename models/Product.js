const mongoose = require('mongoose');

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
const Product = mongoose.model("Product", productSchema);

module.exports = Product;

/* 
const mongoose = require("mongoose");

//Schema design
const tourSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide a name for this tour"],
    },
    image: {
      type: String,
      required: [true, "Please provide a image for this tour"],
    },
    description: {
      type: String,
      required: [true, "Please provide a description for this tour"],
    },
    price: {
      type: Number,
      required: [true, "Please provide a price for this tour"],
      min: [0, "Price can't be negative"],
    },
    catagory: {
      type: String,
      required: [true, "Please provide a catagory for this tour"],
    },
  },
  { timestamps: true }
);

//Schema -> Model -> Query

//Making Model
const Tour = mongoose.model("Tour", tourSchema);

module.exports = Tour; */