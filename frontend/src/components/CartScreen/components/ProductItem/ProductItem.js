import "./ProductItem.scss";

export const ProductItem = ({ product }) => {
	const { _id, imgUrl, currency, title, oldPrice, newPrice, quantity } =
		product;
	return (
		<div className="product-item">
			<div className="product-item__info">
				<div className="product-item__image">
					<img src={imgUrl} alt={title} />
				</div>
				<div className="product-item__titles">
					<div className="product-item__title">{title}</div>
					<div className="product-item__old-price">
						{oldPrice && (
							<>
								{currency}
								{Number(oldPrice)?.toFixed(2) || 0}
							</>
						)}
					</div>
					<div className="product-item__new-price">
						{currency}
						{Number(newPrice)?.toFixed(2) || 0}
					</div>
				</div>
			</div>
			<div className="product-item__quantity">
				<label htmlFor="quantity-input">Quantity :</label>
				<input id="quantity-input" defaultValue={quantity}></input>
				<button className="product-item__close-button">&#10006;</button>
			</div>
		</div>
	);
};
