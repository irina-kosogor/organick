import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { App } from "./components/App/App";
import { MainContent } from "components/MainContent/MainContent";
import { ThankYou } from "components/ThankYou/ThankYou";
import { NotFound } from "components/NotFound/NotFound";
import "./index.scss";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{ index: true, element: <MainContent /> },
			{ path: "home", element: <MainContent /> },
			{
				path: "thanks",
				element: <ThankYou />,
			},
			{ path: "*", element: <NotFound /> },
		],
	},
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
