import { ProductCard } from "../Products/components/ProductCard";
import React, { useContext } from "react";
import { ProductsContext } from "components/App/App";
import "./OfferCards.scss";

export const OfferCards = () => {
	const { products } = useContext(ProductsContext);
	const firstFourProducts = products?.slice(0, 4);
	return (
		<div className="offer-cards" id="offer-cards">
			<div className="container">
				<div className="offer-cards__subtitle">Offer</div>
				<div className="offer-cards__title">
					We Offer Organic For You
				</div>
				<div className="offer-cards__cards-wrapper">
					{firstFourProducts.map((product, index) => {
						const {
							category,
							imgUrl: imageUrl,
							title,
							currency,
							oldPrice,
							newPrice,
							rating,
						} = product;
						return (
							<ProductCard
								key={index}
								category={category}
								imageUrl={imageUrl}
								title={title}
								currency={currency}
								oldPrice={oldPrice}
								newPrice={newPrice}
								rating={rating}
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
};
