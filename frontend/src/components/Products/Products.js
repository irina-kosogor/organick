import React, { useContext, useState, useRef } from "react";
import { Button } from "utils/Button/Button";
import { ProductCard } from "./components/ProductCard";
import { Link } from "react-router-dom";
import { ProductsContext } from "components/App/App";
import { useMemo } from "react";
import "./Products.scss";

export const Products = () => {
	const headerRef = useRef(null);
	const { products, fetchAllProducts } = useContext(ProductsContext);

	const [showAllProducts, setShowAllProducts] = useState(false);

	const handleClick = async () => {
		await fetchAllProducts();
		setShowAllProducts((oldValue) => {
			if (oldValue) {
				autoscrollToHeader();
			}
			return !oldValue;
		});
	};

	const autoscrollToHeader = () => {
		headerRef.current.scrollIntoView();
	};

	const productsToShow = useMemo(
		() => (showAllProducts ? products : products.slice(0, 8)),
		[products, showAllProducts]
	);

	return (
		<div className="products" id="products" ref={headerRef}>
			<div className="container">
				<div className="products__subtitle">Categories</div>
				<div className="products__title">Our Products</div>
				<div className="products__cards-wrapper">
					{productsToShow.map((product, index) => {
						const {
							_id,
							category,
							imgUrl,
							title,
							currency,
							oldPrice,
							newPrice,
							rating,
						} = product;
						return (
							<Link key={index} to={`products/${_id}`}>
								<ProductCard
									category={category}
									imageUrl={imgUrl}
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
					<Button
						onClick={handleClick}
						text={showAllProducts ? "Hide All" : "Load More"}
						color="darkBlue"
					/>
				</div>
			</div>
		</div>
	);
};
