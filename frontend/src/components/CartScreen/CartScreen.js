import { useState } from "react";
import { Button } from "utils/Button/Button";
import { ProductsList } from "./components/ProductsList/ProductsList";
import { OrderForm } from "./components/OrderForm/OrderForm";

import "./CartScreen.scss";

export const CartScreen = () => {
	const [showForm, setShowForm] = useState(false);

	const handleClick = () => {
		setShowForm((oldValue) => !oldValue);
	};

	return (
		<div className="cart-screen">
			<h3 className="cart-screen__title">
				<span>Cart</span>
			</h3>
			<div className="cart-screen__content">
				<ProductsList />
				{!showForm && (
					<Button
						text="To order"
						color="darkBlue"
						onClick={handleClick}
					/>
				)}
				{showForm && <OrderForm />}
			</div>
		</div>
	);
};
