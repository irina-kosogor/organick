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
import React, { useState, useEffect, createContext } from "react";
import axios from "axios";
import "./App.scss";

export const ProductsContext = createContext();

export const App = () => {
	const navigate = useNavigate();

	const handleCloseModal = () => {
		navigate("/");
	};

	const [products, setProducts] = useState([]);

	useEffect(() => {
		const fetchProducts = async () => {
			const { data } = await axios.get("/api/products");
			setProducts(data.slice(0, 8));
		};
		fetchProducts();
	}, []);

	return (
		<div className="wrapper">
			<Header />
			<Routes>
				<Route path="/">
					<Route
						path=""
						exact="true"
						element={
							<ProductsContext.Provider value={products}>
								<MainContent />
							</ProductsContext.Provider>
						}
					/>
					<Route
						path="product/:id"
						element={
							<ProductsContext.Provider value={products}>
								<MainContent />
								<Modal
									onClose={handleCloseModal}
									children={<ProductOrder />}
								/>
							</ProductsContext.Provider>
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
