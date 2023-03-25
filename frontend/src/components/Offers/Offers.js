import { Card } from "./components/Card";
import "./Offers.scss";

export const Offers = () => {
	const cards = [
		{ subtitle: "Natural!!", title: "Get Garden Fresh Fruits" },
		{ subtitle: "Offer!!", title: "Get 10% off on Vegetables" },
	];
	return (
		<div className="offers" id="offers">
			<div className="container">
				<div className="offers__wrapper">
					{cards.map((card, index) => (
						<Card
							key={index}
							subtitle={card.subtitle}
							title={card.title}
						/>
					))}
				</div>
			</div>
		</div>
	);
};
