import "./App.scss";
import Header from "components/Header/Header";
import { Hero } from "components/Hero/Hero";
import { Offers } from "components/Offers/Offers";
import { AboutUs } from "components/AboutUs/AboutUs";

const App = () => {
	return (
		<>
			<Header />
			<Hero />
			<Offers />
			<AboutUs />
		</>
	);
};

export default App;
