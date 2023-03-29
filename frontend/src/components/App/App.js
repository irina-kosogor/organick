import { Header } from "components/Header/Header";
import { Footer } from "components/Footer/Footer";
import { Routes, Route } from "react-router-dom";
import { MainContent } from "components/MainContent/MainContent";
import { useNavigate } from "react-router-dom";
import { NotFound } from "components/NotFound/NotFound";
import { ThankYou } from "components/ThankYou/ThankYou";
import { CartScreen } from "components/CartScreen/CartScreen";
import { Modal } from "components/Modal/Modal";
import { ProductOrder } from "components/ProductOrder/ProductOrder";
import fakeData from "../Products/fakeData.json";
import "./App.scss";

export const App = () => {
	const navigate = useNavigate();

	const handleCloseModal = () => {
		navigate("/");
	};

	return (
		<div className="wrapper">
			<Header />
			<Routes>
				<Route path="/">
					<Route path="" exact="true" element={<MainContent />} />
					<Route
						path="product/:id"
						element={
							<>
								<MainContent />
								<Modal
									onClose={handleCloseModal}
									children={
										<ProductOrder product={fakeData[0]} />
									}
								/>
							</>
						}
					/>
					<Route path="thanks" element={<ThankYou />} />
					<Route path="cart" element={<CartScreen />} />
					<Route path="*" element={<NotFound />} />
				</Route>
			</Routes>
			<Footer />
		</div>
	);
};
