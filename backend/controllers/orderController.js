import asyncHandler from "express-async-handler";
import Order from "../models/orderModel.js";

// @desc    Create new order
// @route   POST /api/orders
// @access  Private
const addOrderItems = asyncHandler(async (req, res) => {
	const { customer, products: orderedProducts } = req.body;
	console.log("orderedProducts", orderedProducts);
	if (orderedProducts && orderedProducts.length === 0) {
		res.status(400);
		throw new Error("No order items");
	}

	if (
		!customer ||
		!customer.fullName ||
		!customer.email ||
		!customer.address ||
		!customer.phone
	) {
		res.status(400);
		throw new Error("Please provide customer information");
	}

	const order = new Order({
		orderedProducts,
		customer,
	});

	const createdOrder = await order.save();

	res.status(201).json(createdOrder);
});

export { addOrderItems };
