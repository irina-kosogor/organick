import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Button } from "utils/Button/Button";
import "./OrderForm.scss";

export const OrderForm = ({ clearProducts, orderData, updateCustomer }) => {
	const navigate = useNavigate();

	const [formData, setFormData] = useState({});

	useEffect(() => {
		updateCustomer(formData);
	}, [formData]);

	const handleChange = (e) => {
		setFormData((old) => {
			return { ...old, [e.target.name]: e.target.value };
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			await axios.post("/api/orders", orderData, {
				headers: {
					"Content-Type": "application/json",
				},
			});
			clearProducts();
			navigate("/thanks");
		} catch (error) {
			console.error(`Error: ${error.message}`);
		}
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
								name="fullName"
								className="order-form__name"
								type="text"
								placeholder="Your full name"
								required
								onInput={handleChange}
							/>
						</div>
						<div className="order-form__item">
							<label htmlFor="order-form__email">
								Your Email*
							</label>
							<input
								id="order-form__email"
								name="email"
								className="order-form__email"
								type="email"
								placeholder="example@yourmail.com"
								required
								onInput={handleChange}
							/>
						</div>
						<div className="order-form__item">
							<label htmlFor="order-form__address">
								Address*
							</label>
							<input
								id="order-form__address"
								name="address"
								className="order-form__address"
								type="text"
								placeholder="Your company address"
								required
								onInput={handleChange}
							/>
						</div>
						<div className="order-form__item">
							<label htmlFor="order-form__phone">
								Phone number*
							</label>
							<input
								id="order-form__phone"
								name="phone"
								className="order-form__phone"
								type="tel"
								placeholder="Your phone number"
								required
								onInput={handleChange}
							/>
						</div>
						<div className="order-form__item">
							<label htmlFor="order-form__message">Message</label>
							<textarea
								rows="5"
								id="order-form__message"
								name="message"
								className="order-form__message"
								placeholder="Type your message here"
								onInput={handleChange}
							/>
						</div>
					</div>
					<Button text="Confirm" color="darkBlue" noArrow={true} />
				</form>
			</div>
		</div>
	);
};
