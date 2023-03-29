import { Button } from "utils/Button/Button";
import { ProductCard } from "./components/ProductCard";
import { Link } from "react-router-dom";
import fakeData from "./fakeData.json";
import "./Products.scss";

export const Products = () => {
	const firstEightProducts = fakeData.slice(0, 8);
	return (
		<div className="products" id="products">
			<div className="container">
				<div className="products__subtitle">Categories</div>
				<div className="products__title">Our Products</div>
				<div className="products__cards-wrapper">
					{firstEightProducts.map((product, index) => {
						const {
							id,
							category,
							"img-url": imageUrl,
							title,
							currency,
							"old-price": oldPrice,
							"new-price": newPrice,
							rating,
						} = product;
						return (
							<Link to={`product/${id}`}>
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
							</Link>
						);
					})}
				</div>
				<div>
					<Button text="Load More" color="darkBlue" />
				</div>
			</div>
		</div>
	);
};
