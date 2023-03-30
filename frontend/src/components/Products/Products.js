import React, { useContext, useState } from "react";
import { Button } from "utils/Button/Button";
import { ProductCard } from "./components/ProductCard";
import { Link, useSearchParams } from "react-router-dom";
import { ProductsContext } from "components/App/App";
import "./Products.scss";
import { useEffect } from "react";

export const Products = () => {
	const products = useContext(ProductsContext);
	const [searchParams, setSearchParams] = useSearchParams();
	const [allProducts, setAllProducts] = useState(
		searchParams.get("allProducts")
	);

	const handleClick = (e) => {
		e.preventDefault();
		setAllProducts((oldValue) => !oldValue);
	};

	useEffect(() => {
		setSearchParams(allProducts ? { allProducts: "true" } : {});
	}, [allProducts, setSearchParams]);

	return (
		<div className="products" id="products">
			<div className="container">
				<div className="products__subtitle">Categories</div>
				<div className="products__title">Our Products</div>
				<div className="products__cards-wrapper">
					{products.map((product, index) => {
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
						text={allProducts ? "Hide All" : "Load More"}
						color="darkBlue"
					/>
				</div>
			</div>
		</div>
	);
};
