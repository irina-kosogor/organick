import { Header } from "components/Header/Header";
import { Footer } from "components/Footer/Footer";
import { Outlet } from "react-router-dom";
import "./App.scss";

export const App = () => {
	return (
		<div className="wrapper">
			<Header />
			<main className="main">
				<Outlet />
			</main>
			<Footer />
		</div>
	);
};
