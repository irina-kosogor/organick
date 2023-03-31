import { useNavigate } from "react-router-dom";
import { Button } from "utils/Button/Button";
import "./OrderForm.scss";

export const OrderForm = ({ clearProducts }) => {
	const formData = {};

	const navigate = useNavigate();

	const handleChange = (event, fieldName) => {
		formData[fieldName] = event.target.value;
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("data has been applied");
		clearProducts();
		navigate("/thanks");
	};

	return (
		<div className="order-form">
			<div className="container">
				<form action="#" id="order-form" onSubmit={handleSubmit}>
					<div className="order-form__items">
						<div className="order-form__item">
							<label htmlFor="order-form__name">Full Name*</label>
							<input
								id="order-form__name"
								name="order-form__name"
								className="order-form__name"
								type="text"
								placeholder="Your full name"
								required
								onChange={(e) => handleChange(e, "fullName")}
							/>
						</div>
						<div className="order-form__item">
							<label htmlFor="order-form__email">
								Your Email*
							</label>
							<input
								id="order-form__email"
								name="order-form__email"
								className="order-form__email"
								type="email"
								placeholder="example@yourmail.com"
								required
								onChange={(e) => handleChange(e, "email")}
							/>
						</div>
						<div className="order-form__item">
							<label htmlFor="order-form__address">
								Address*
							</label>
							<input
								id="order-form__address"
								name="order-form__address"
								className="order-form__address"
								type="text"
								placeholder="Your company address"
								required
								onChange={(e) => handleChange(e, "address")}
							/>
						</div>
						<div className="order-form__item">
							<label htmlFor="order-form__phone">
								Phone number*
							</label>
							<input
								id="order-form__phone"
								name="order-form__phone"
								className="order-form__phone"
								type="tel"
								placeholder="Your phone number"
								required
								onChange={(e) => handleChange(e, "phone")}
							/>
						</div>
						<div className="order-form__item">
							<label htmlFor="order-form__message">Message</label>
							<textarea
								rows="5"
								id="order-form__message"
								name="order-form__message"
								className="order-form__message"
								placeholder="Type your message here"
								onChange={(e) => handleChange(e, "message")}
							/>
						</div>
					</div>
					<Button text="Confirm" color="darkBlue" noArrow={true} />
				</form>
			</div>
		</div>
	);
};
