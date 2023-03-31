import React, { useState, useEffect, useMemo, createContext } from "react";
import axios from "axios";
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

	const handleCloseModal = () => {
		navigate("/");
	};

	const [products, setProducts] = useState([]);
	const [allProducts, setAllProducts] = useState([]);

	const fetchAllProducts = async () => {
		if (allProducts.length === 0) {
			let url = "/api/products/all";
			let { data } = await axios.get(url);
			setAllProducts(data);
		}
	};

	useEffect(() => {
		const fetchProducts = async () => {
			const url = "/api/products";
			const { data } = await axios.get(url);
			setProducts(data);
		};

		if (products.length === 0) {
			fetchProducts();
		}
	}, [products]);

	const initialOrderData = {
		products: [
			{
				category: "Fresh",
				imgUrl: "/images/banana.png",
				newPrice: 14,
				oldPrice: 20,
				quantity: 1,
				rating: 4,
				title: "Fresh Banana Fruites",
				_id: "6424821ef87edc9adabe7682",
			},
		],
		customer: {},
	};

	const [orderData, setOrderData] = useState(initialOrderData);

	const orderedProducts = useMemo(() => {
		const fetchedProducts =
			allProducts.length === 0 ? products : allProducts;

		return orderData.products.map((data) => {
			const product = fetchedProducts.find(
				(product) => product._id === data._id
			);
			return { ...product, quantity: data.quantity };
		});
	}, [products, allProducts, orderData]);

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
							<ProductsContext.Provider
								value={{
									products:
										allProducts.length === 0
											? products
											: allProducts,
									fetchAllProducts,
								}}
							>
								<MainContent />
							</ProductsContext.Provider>
						}
					/>
					<Route
						path="products/:id"
						element={
							<ProductsContext.Provider
								value={{
									products:
										allProducts.length === 0
											? products
											: allProducts,
								}}
							>
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
					<Route
						path="cart"
						element={
							<CartScreen
								orderData={{ products: orderedProducts }}
							/>
						}
					/>
					<Route path="*" element={<NotFound />} />
				</Route>
			</Routes>
			<Footer />
		</div>
	);
};
