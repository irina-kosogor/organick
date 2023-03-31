import { Link } from "react-router-dom";
import "./Cart.scss";

export const Cart = ({ orderedProducts }) => {
	let quantity = 0;
	orderedProducts.forEach((product) => {
		quantity += product.quantity;
	});
	return (
		<Link to="/cart">
			<div className="cart">Cart ({quantity ? quantity : 0})</div>
		</Link>
	);
};
