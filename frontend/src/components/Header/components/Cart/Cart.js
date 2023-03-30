import { Link } from "react-router-dom";
import "./Cart.scss";

export const Cart = ({ quantity = 0 }) => {
	return (
		<Link to="/cart">
			<div className="cart">Cart ({quantity})</div>
		</Link>
	);
};
