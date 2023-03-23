import "./Cart.scss";

export const Cart = ({ quantity = 0 }) => {
	return <div className="cart">Cart ({quantity})</div>;
};
