const router = require('express').Router();
const productController = require('../controllers/product.controller');

router.route('/bulk-update').patch(productController.bulkUpdateProduct)
router.route('/bulk-delete').delete(productController.bulkDeleteProduct)
router.route('/')
    .get(productController.getProduct)
    .post(productController.createProduct)

router.route('/:id')
    .patch(productController.updateProduct)
    .delete(productController.deleteProduct)

module.exports = router;

/* const express = require("express");
const {
  getTours,
  createTours,
  tourDetails,
  updateTour,
  getThreeCheapestTours,
  getThreeTrendingTours,
} = require("../controllers/Tour.controller");
const { viewCount } = require("../middleware/viewCount");
const router = express.Router();

router.route("/").get(getTours).post(createTours);
router.route("/cheapest").get(getThreeCheapestTours);
router.route("/trending").get(getThreeTrendingTours);
router.route("/:id").get(viewCount, tourDetails);
router.route("/:id").patch(updateTour);

module.exports = router; */