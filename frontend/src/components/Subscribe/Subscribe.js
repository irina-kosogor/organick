import { Button } from "utils/Button/Button";
import "./Subscribe.scss";

export const Subscribe = () => {
	return (
		<div className="subscribe">
			<div className="container">
				<div className="subscribe__wrapper">
					<h3 className="subscribe__title">
						Subscribe to our Newsletter
					</h3>
					<form action="#" className="subscribe__form">
						<input
							type="email"
							className="subscribe__form-input"
							placeholder="Your Email Address"
						/>
						<Button
							text="Subscribe"
							color="darkBlue"
							noArrow={true}
						/>
					</form>
				</div>
			</div>
		</div>
	);
};
