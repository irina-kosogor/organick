import "./Navbar.scss";

export const Navbar = ({ navLinks }) => {
	return (
		<div className="navbar__menu">
			{navLinks.map((item) => (
				<a
					key={item}
					href={`/${item.toLocaleLowerCase()}`}
					className={item === "Pages" ? "dropdown-menu" : undefined}
				>
					{item}
				</a>
			))}
		</div>
	);
};
