import "./Button.scss";

export const Button = ({ text, color }) => {
	const defineBtnColor = (color) => {
		switch (color) {
			case "yellow":
				return "yellow";
			case "darkBlue":
				return "dark-blue";
			default:
				return "white";
		}
	};
	
	return (
		<button className={`main-button ${defineBtnColor(color)}`}>
			<span className="main-button__text">{text}</span>
		</button>
	);
};
