import { ProductCard } from "../Products/components/ProductCard";
import fakeData from "../Products/fakeData.json";
import "./OfferCards.scss";

export const OfferCards = () => {
	const firstEFourtProducts = fakeData.slice(0, 4);
	return (
		<div className="offer-cards" id="offer-cards">
			<div className="container">
				<div className="offer-cards__subtitle">Offer</div>
				<div className="offer-cards__title">
					We Offer Organic For You
				</div>
				<div className="offer-cards__cards-wrapper">
					{firstEFourtProducts.map((product, index) => {
						const {
							category,
							"img-url": imageUrl,
							title,
							currency,
							"old-price": oldPrice,
							"new-price": newPrice,
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
