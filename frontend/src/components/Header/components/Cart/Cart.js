import { HashLink as Link } from "react-router-hash-link";
import "./Cart.scss";

export const Cart = ({ orderedProducts }) => {
	let quantity = 0;
	orderedProducts.forEach((product) => {
		quantity += product.quantity;
	});
	return (
		<Link to="/cart#top">
			<div className="cart">Cart ({quantity ? quantity : 0})</div>
		</Link>
	);
};
