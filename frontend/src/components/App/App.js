import { Header } from "components/Header/Header";
import { Footer } from "components/Footer/Footer";
import { Routes, Route, useSearchParams } from "react-router-dom";
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

const orderData = {
	products: [
		{
			_id: 1,
			quantity: 1,
			oldPrice: 18,
			newPrice: 16,
		},
		{
			_id: 2,
			quantity: 1,
			oldPrice: 18,
			newPrice: 16,
		},
		{
			_id: 3,
			quantity: 1,
			oldPrice: 18,
			newPrice: 16,
		},
	],
	customer: {
		fullName: "Irina Kosogor",
		email: "",
		address: "",
		phone: "",
		message: "",
	},
};

export const ProductsContext = createContext();

export const App = () => {
	const navigate = useNavigate();
	const [searchParams] = useSearchParams();

	const handleCloseModal = () => {
		navigate("/");
	};

	const [products, setProducts] = useState([]);

	useEffect(() => {
		const fetchProducts = async () => {
			let url = "/api/products";
			if (searchParams.get("allProducts") === "true") {
				url += "?allProducts=true";
			}
			let { data } = await axios.get(url);
			setProducts(data);
			// setProducts(data.slice(0, 8));
		};
		fetchProducts();
	}, []);

	const initialOrderData = { products: [], customer: {} };

	const [orderData, setOrderData] = useState(initialOrderData);

	const addProduct = (_id, quantity) => {
		setOrderData((oldData) => {
			const product = oldData.products.find(
				(product) => product._id === _id
			);

			if (product) {
				return {
					...oldData,
					products: [
						...oldData.products.filter(
							(product) => product._id !== _id
						),
						{
							_id: product._id,
							quantity: +product.quantity + +quantity,
						},
					],
				};
			}
			return {
				...oldData,
				products: [...oldData.products, { _id, quantity: +quantity }],
			};
		});
	};

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
						path="products/:id"
						element={
							<ProductsContext.Provider value={products}>
								<MainContent />
								<Modal
									onClose={handleCloseModal}
									children={
										<ProductOrder
											addProduct={(_id, quantity) =>
												addProduct(_id, quantity)
											}
										/>
									}
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
