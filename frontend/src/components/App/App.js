import "./App.scss";
import Header from "components/Header/Header";
import { Hero } from "components/Hero/Hero";
import { Offers } from "components/Offers/Offers";
import { AboutUs } from "components/AboutUs/AboutUs";
import { Products } from "components/Products/Products";
import { Testimonials } from "components/Testimonials/Testimonials";

const App = () => {
	return (
		<>
			<Header />
			<Hero />
			<Offers />
			<AboutUs />
			<Products />
			<Testimonials />
		</>
	);
};

export default App;
