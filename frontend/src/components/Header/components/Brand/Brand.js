import "./Brand.scss";
import logo from "assets/images/logo.svg";

export const Brand = ({ homeLink }) => {
	return (
		<div className="brand">
			<a className="brand__link" href={`/${homeLink.toLowerCase()}`}>
				<img className="brand__icon" alt="logo-img" src={logo} />
				<span className="brand__title">Organick</span>
			</a>
		</div>
	);
};
