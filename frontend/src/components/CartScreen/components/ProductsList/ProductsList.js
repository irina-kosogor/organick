import "./ProductsList.scss";

export const ProductsList = ({ children, products }) => {
	let totalCost = 0;
	let totalCostNoDiscount = 0;
	const currency = products[0].currency;

	products.forEach((product) => {
		let oldPrice = 0;
		if (!product.oldPrice) {
			oldPrice = product.newPrice;
		} else {
			oldPrice = product.oldPrice;
		}

		totalCost += product.newPrice * product.quantity;
		totalCostNoDiscount += oldPrice * product.quantity;
	});

	return (
		<div className="products-list">
			<div className="container">
				{children}
				<div className="products-list__order-details">
					<div className="products-list__order-details-grid">
						<div className="products-list__total-cost-title">
							Total Cost
						</div>
						<div className="products-list__total-cost-value">
							{totalCost.toFixed(2)}
							{currency}
						</div>
						<div className="products-list__discount-title">
							Discount
						</div>
						<div className="products-list__discount-value">
							{(totalCostNoDiscount - totalCost).toFixed(2)}
							{currency}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
