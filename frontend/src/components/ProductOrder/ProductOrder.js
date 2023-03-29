import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "utils/Button/Button";
import { createRating } from "utils/functions/createRating";
import { useParams } from "react-router-dom";
import "./ProductOrder.scss";

export const ProductOrder = () => {
	const [activeExtraInfo, setActiveExtraInfo] = useState(
		"product-description"
	);

	const { id: urlId } = useParams();

	const [product, setProduct] = useState({});

	useEffect(() => {
		const fetchProduct = async () => {
			const { data } = await axios.get(`/api/product/${urlId}`);
			setProduct(data);
		};
		fetchProduct();
	}, []);

	const {
		category,
		"img-url": imageUrl,
		title,
		currency,
		"old-price": oldPrice,
		"new-price": newPrice,
		rating,
		text,
		description,
		info,
	} = product;

	return (
		<div className="product-order">
			<div className="product-order__content">
				<div className="product-order__image">
					<div className="product-order__category">{category}</div>
					<img src={imageUrl} alt={title} />
				</div>
				<div className="product-order__info">
					<h3 className="product-order__product-title">{title}</h3>
					<div className="product-order__product-rating">
						{createRating(rating)}
					</div>
					<div className="product-order__prices">
						<span className="product-order__old-price">
							{currency}
							{Number(oldPrice).toFixed(2)}
						</span>
						<span className="product-order__new-price">
							{currency}
							{Number(newPrice).toFixed(2)}
						</span>
					</div>
					<div className="product-order__product-text">{text}</div>
					<div className="product-order__cta">
						<label
							htmlFor="product-order-input"
							className="product-order__cta-label"
						>
							Quantity :
						</label>
						<input
							id="product-order-input"
							defaultValue="1"
							type="number"
							min="0"
							className="product-order__cta-quantity"
						/>
						<Button text="Add To Cart" color="darkBlue" />
					</div>
				</div>
			</div>
			<div className="product-order__extra-info">
				<div className="product-order__buttons-wrapper">
					<Button
						text="Product Description"
						color={
							activeExtraInfo === "product-description"
								? "white"
								: "darkBlue"
						}
						noArrow={true}
						onClick={() => {
							setActiveExtraInfo("product-description");
						}}
					/>
					<Button
						text="Additional Info"
						color={
							activeExtraInfo === "additional-info"
								? "white"
								: "darkBlue"
						}
						noArrow={true}
						onClick={() => {
							setActiveExtraInfo("additional-info");
						}}
					/>
				</div>
				<div className="product-order__extra-content">
					{activeExtraInfo === "product-description" && description}
					{activeExtraInfo === "additional-info" && info}
				</div>
			</div>
		</div>
	);
};
