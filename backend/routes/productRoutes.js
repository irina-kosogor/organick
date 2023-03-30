import express from "express";
import asyncHandler from "express-async-handler";
import Product from "../models/productModel.js";
const router = express.Router();

/**
 * @descr Fetch all products with old prices, filtered by price and sorted by date in descending order
 * @route GET /api/products
 * @access Public
 */
router.get(
	"/",
	asyncHandler(async (req, res) => {
		let query = { find: {}, limit: 0 };

		if (!req.query.allProducts) {
			query.find = { oldPrice: { $exists: true, $ne: null } };
			query.limit = 8;
		}

		const products = await Product.find(query.find) // Filter by old price
			.limit(query.limit) // Fetch only 8 elements
			.select("category title imgUrl oldPrice  newPrice rating"); // Select only desired fields
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
