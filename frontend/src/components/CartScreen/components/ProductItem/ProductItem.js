import { toast } from "react-toastify";
import "./ProductItem.scss";

export const ProductItem = ({
	product,
	removeProduct,
	updateProductQuantity,
}) => {
	const { _id, imgUrl, currency, title, oldPrice, newPrice, quantity } =
		product;

	const notifyOnRemove = () =>
		toast.error(`${title} removed from the cart`, {
			position: "bottom-center",
			autoClose: 3000,
			hideProgressBar: true,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: "colored",
		});

	const handleClick = (_id) => {
		removeProduct(_id);
		notifyOnRemove();
	};

	const handleChange = (_id, quantity) => {
		updateProductQuantity(_id, quantity);
	};

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
				<input
					id="quantity-input"
					defaultValue={quantity}
					type="number"
					min="0"
					onChange={(e) => handleChange(_id, +e.target.value)}
				></input>
				<button
					className="product-item__close-button"
					onClick={() => handleClick(_id)}
				>
					&#10006;
				</button>
			</div>
		</div>
	);
};
