import mongoose from "mongoose";

const productSchema = mongoose.Schema(
	{
		category: {
			type: String,
			required: true,
		},
		imgUrl: {
			type: String,
			required: true,
		},
		title: {
			type: String,
			required: true,
		},
		currency: {
			type: String,
			required: true,
		},
		oldPrice: {
			type: Number,
			required: false,
			default: 0,
		},
		newPrice: {
			type: Number,
			required: false,
			default: 0,
		},
		rating: {
			type: Number,
			required: true,
		},
		text: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
		info: {
			type: String,
			required: true,
		},
		countInStock: {
			type: Number,
			required: true,
			default: 0,
		},
	},
	{
		timestamps: true,
	}
);

const Product = mongoose.model("Product", productSchema);

export default Product;
