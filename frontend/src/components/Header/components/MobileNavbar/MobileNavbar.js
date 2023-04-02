import { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import "./MobileNavbar.scss";

export const MobileNavbar = ({ navLinks }) => {
	const [showMobileNavbar, setShowMobileNavbar] = useState(false);

	const handleOpenClick = () => {
		setShowMobileNavbar(true);
	};
	const handleCloseClick = () => {
		setShowMobileNavbar(false);
	};

	return (
		<nav className="hamburger">
			<button
				className="hamburger__btn"
				onClick={handleOpenClick}
			></button>
			<section className={`mobile-menu ${showMobileNavbar && "active"}`}>
				<div className="mobile-menu__block">
					<div
						className="mobile-menu__close"
						onClick={handleCloseClick}
					>
						<svg
							width="20"
							height="20"
							viewBox="0 0 29 30"
							fill=""
							xmlns="http://www.w3.org/2000/svg"
						>
							<path d="M17.1568 14.5231L28.4489 3.23075C29.1837 2.49623 29.1837 1.30861 28.4489 0.574085C27.7144 -0.160437 26.5267 -0.160437 25.7922 0.574085L14.4998 11.8665L3.20781 0.574085C2.47295 -0.160437 1.28567 -0.160437 0.551149 0.574085C-0.183716 1.30861 -0.183716 2.49623 0.551149 3.23075L11.8432 14.5231L0.551149 25.8155C-0.183716 26.55 -0.183716 27.7376 0.551149 28.4721C0.917206 28.8385 1.39852 29.0226 1.87948 29.0226C2.36045 29.0226 2.84141 28.8385 3.20781 28.4721L14.4998 17.1798L25.7922 28.4721C26.1586 28.8385 26.6396 29.0226 27.1205 29.0226C27.6015 29.0226 28.0825 28.8385 28.4489 28.4721C29.1837 27.7376 29.1837 26.55 28.4489 25.8155L17.1568 14.5231Z" />
						</svg>
					</div>

					<nav className="mobile-menu__list">
						{navLinks.map((item, index) => (
							<Link
								key={index}
								to={`/#${item.hash}`}
								className="mobile-menu__link"
								onClick={handleCloseClick}
							>
								{item.name}
							</Link>
						))}
					</nav>
				</div>
				<div className="mobile-menu__overlay"></div>
			</section>
		</nav>
	);
};
