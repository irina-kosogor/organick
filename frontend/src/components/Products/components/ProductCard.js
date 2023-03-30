import "./ProductCard.scss";
import { createRating } from "utils/functions/createRating";

export const ProductCard = ({
	category,
	imageUrl,
	title,
	currency,
	oldPrice,
	newPrice,
	rating,
}) => {
	return (
		<div className="product-card">
			<div className="product-card__category">{category}</div>
			<div className="product-card__image">
				<img src={imageUrl} alt={title} />
			</div>
			<h4 className="product-card__title">{title}</h4>
			<div className="product-card__info-wrapper">
				<div className="product-card__prices">
					<span className="product-card__old-price">
						{currency}
						{Number(oldPrice)?.toFixed(2) || 0}
					</span>
					<span className="product-card__new-price">
						{currency}
						{Number(newPrice)?.toFixed(2) || 0}
					</span>
				</div>
				<div className="product-card__product-rating">
					{createRating(rating)}
				</div>
			</div>
		</div>
	);
};
