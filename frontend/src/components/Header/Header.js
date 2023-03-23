import "./Header.scss";
import { Brand } from "./components/Brand/Brand";
import { Navbar } from "./components/Navbar/Navbar";
import { SearchInput } from "./components/SearchInput/SearchInput";
import { Cart } from "./components/Cart/Cart";

const Header = () => {
	const navLinks = ["Home", "About", "Pages", "Shop", "Projects", "News"];

	return (
		<div className="header">
			<div className="container">
				<div className="header__content">
					<Brand homeLink={navLinks[0]} />
					<Navbar navLinks={navLinks} />
					<div className="header__search-cart">
						<SearchInput />
						<Cart />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
