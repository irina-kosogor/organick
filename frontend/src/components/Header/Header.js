import { Brand } from "./components/Brand/Brand";
import { Navbar } from "./components/Navbar/Navbar";
import { MobileNavbar } from "./components/MobileNavbar/MobileNavbar";
import { SearchInput } from "./components/SearchInput/SearchInput";
import { Cart } from "./components/Cart/Cart";
import "./Header.scss";

export const Header = ({ orderedProducts }) => {
	const navLinks = [
		{ name: "Home", hash: "top" },
		{ name: "About", hash: "about-us" },
		{ name: "Pages", hash: "pages" },
		{ name: "Shop", hash: "products" },
		{ name: "Projects", hash: "projects" },
		{ name: "News", hash: "news" },
	];

	return (
		<header className="header">
			<div className="container">
				<div className="header__content">
					<Brand />
					<Navbar navLinks={navLinks} />
					<div className="header__search-cart">
						<SearchInput />
						<Cart orderedProducts={orderedProducts} />
						<MobileNavbar navLinks={navLinks} />
					</div>
				</div>
			</div>
		</header>
	);
};
