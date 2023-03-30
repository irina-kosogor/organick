
import { OrderForm } from "../OrderForm/OrderForm";
import "./ProductsList.scss";

export const ProductsList = ({ children }) => {
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
							26$
						</div>
						<div className="products-list__discount-title">
							Discount
						</div>
						<div className="products-list__discount-value">14$</div>
					</div>
				</div>
				
				
			</div>
		</div>
	);
};
