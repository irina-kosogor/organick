import "./App.scss";
import Header from "components/Header/Header";
import { Hero } from "components/Hero/Hero";
import { Offers } from "components/Offers/Offers";

const App = () => {
	return (
		<>
			<Header />
			<Hero />
			<Offers />
		</>
	);
};

export default App;
