import "./Button.scss";

export const Button = ({ text, color, noArrow = false }) => {
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
		<button
			className={`main-button ${defineBtnColor(color)} ${
				noArrow ? "noArrow" : ""
			}`}
		>
			<span className={`main-button__text ${noArrow ? "noArrow" : ""}`}>
				{text}
			</span>
		</button>
	);
};
