import "./Stat.scss";

export const Stat = ({ title, subtitle }) => {
	return (
		<div className="stat">
			<h4 className="stat__title">{title}</h4>
			<p className="stat__subtitle">{subtitle}</p>
		</div>
	);
};
