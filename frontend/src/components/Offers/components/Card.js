import "./Card.scss";

export const Card = ({ subtitle, title }) => {
	return (
		<div className="card">
			<div className="card__content-wrapper">
				<h3 className="card__subtitle">{subtitle}</h3>
				<h2 className="card__title">{title}</h2>
			</div>
		</div>
	);
};
