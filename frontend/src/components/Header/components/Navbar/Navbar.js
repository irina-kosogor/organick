import { HashLink as Link } from "react-router-hash-link";
import "./Navbar.scss";

export const Navbar = ({ navLinks }) => {
	return (
		<div className="navbar__menu">
			{navLinks.map((item, index) => (
				<Link
					key={index}
					to={`/#${item.hash}`}
					className={
						item.name === "Pages" ? "dropdown-menu" : undefined
					}
				>
					{item.name}
				</Link>
			))}
		</div>
	);
};
