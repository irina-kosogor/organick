import mongoose from "mongoose";

const orderSchema = mongoose.Schema(
	{
		customer: {
			fullName: { type: String, required: true },
			email: { type: String, required: true },
			address: { type: String, required: true },
			phone: { type: String, required: true },
			message: { type: String, required: false },
		},
		orderedProducts: [
			{
				title: { type: String, required: true },
				quantity: { type: Number, required: true },
				imgUrl: { type: String, required: true },
				newPrice: { type: Number, required: true },
				oldPrice: { type: Number, required: false },
			},
		],
	},
	{
		timestamps: true,
	}
);

const Order = mongoose.model("Order", orderSchema);

export default Order;
