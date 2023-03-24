import { Button } from "utils/Button/Button";
import "./Hero.scss";

export const Hero = () => {
	return (
		<div className="hero">
			<div className="container">
				<div className="hero__content">
					<h2 className="hero__subtitle">100% Natural Food</h2>
					<h1 className="hero__title">
						Choose the best healthier way of life
					</h1>
					<Button text="Explore Now" color="yellow" />
				</div>
			</div>
		</div>
	);
};
