import express from "express";
import asyncHandler from "express-async-handler";
import Product from "../models/productModel.js";
const router = express.Router();

/**
 * @descr Fetch 8 products with old prices
 * @route GET /api/products
 * @access Public
 */
router.get(
	"/",
	asyncHandler(async (req, res) => {
		const products = await Product.find({
			oldPrice: { $exists: true, $ne: null },
		}) // Filter by old price
			.limit(8) // Fetch only 8 elements
			.select("category title imgUrl oldPrice newPrice currency rating"); // Select only desired fields
		res.json(products);
	})
);

/**
 * @descr Fetch all products
 * @route GET /api/products/all
 * @access Public
 */
router.get(
	"/all",
	asyncHandler(async (req, res) => {
		const products = await Product.find({}).select(
			"category title imgUrl oldPrice newPrice currency rating"
		); // Select only desired fields
		res.json(products);
	})
);

/**
 * @descr Fetch single product
 * @route GET /api/products/:id
 * @access Public
 */
router.get(
	"/:id",
	asyncHandler(async (req, res) => {
		// const product = products.find((product) => +product.id === +req.params.id);
		const product = await Product.findById(req.params.id);

		if (product) {
			res.json(product);
		} else {
			res.status(404).json({ message: "Product not found" });
		}
	})
);

export default router;
