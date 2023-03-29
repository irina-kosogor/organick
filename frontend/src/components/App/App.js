import { Header } from "components/Header/Header";
import { Footer } from "components/Footer/Footer";
import { Routes, Route } from "react-router-dom";
import { MainContent } from "components/MainContent/MainContent";
import { useNavigate } from "react-router-dom";
import { NotFound } from "components/NotFound/NotFound";
import { ThankYou } from "components/ThankYou/ThankYou";
import { Modal } from "components/Modal/Modal";
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
									children={<div>def</div>}
								/>
							</>
						}
					/>
					<Route path="thanks" element={<ThankYou />} />
					<Route path="*" element={<NotFound />} />
				</Route>
			</Routes>
			<Footer />
		</div>
	);
};
