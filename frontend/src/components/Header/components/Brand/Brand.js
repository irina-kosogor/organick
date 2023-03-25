import logo from "assets/images/logo.svg";
import { Link } from "react-router-dom";
import "./Brand.scss";

export const Brand = () => {
	return (
		<div className="brand">
			<Link className="brand__link" to="/">
				<img className="brand__icon" alt="logo-img" src={logo} />
				<span className="brand__title">Organick</span>
			</Link>
		</div>
	);
};
