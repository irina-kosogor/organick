# Organick

## Description

-   This is a project made as a homework assigment for Sigma Software.
-   Chosen stack of technologies: MERN (MongoDB, ExpressJS, ReactJS, NodeJS).

    -   Frontend: React (functional components, React Hooks, React Router), Axios, SCSS.
    -   Backend: NodeJS, Express (Router, AsyncHandler).
    -   DataBase: MongoDB (Mongoose).

-   Links to the project:
    -   [Deployed project](https://organick-app.herokuapp.com/)
    -   [GitHub](https://github.com/irina-kosogor/organick)

## Project structure

```
backend/
frontend/
   package.json
.env (file is added to .gitignore due to sensitive content)
package.json
```

## Usage (run fullstack app on your machine)

### Prerequisites

-   [Node](https://nodejs.org/en/download/)
-   [npm](https://nodejs.org/en/download/package-manager/)

### Install Dependencies (frontend & backend)

```
npm install
cd frontend
npm install
```

### Run Project

```
# Run frontend (:3000) & backend (:5000)
npm run dev

# Run backend only
npm run server
```

**NOTE:** credentials to make DB connection are stored in appropriate `.env` file for security reasons. To get this data please refer to author by [i.v.kosogor@gmail.com](mailto:i.v.kosogor@gmail.com).

## Build & Deploy

Project is already deployed [here](https://organick-app.herokuapp.com/)

```
# Create frontend prod build
cd frontend
npm run build
```

**NOTE:** credentials to make DB connection are stored in appropriate `.env` file for security reasons. To get this data please refer to author by [i.v.kosogor@gmail.com](mailto:i.v.kosogor@gmail.com).

## Main Features:

### Frontend:

-   The project consists of semantically structured sections represented in code as separate functional React components.
-   The webpage is fully responsive and adaptive to all screen sizes, including desktop, tablet, and mobile devices.
-   Client side routing is implemented using `"React Router"` library.
-   The `"Header"` component is designed to be "sticky" and remains visible at the top of the screen while scrolling. It contains a clickable brand logo, a navigation menu with links to corresponding sections of the page, a search input, and a cart element displaying the number of ordered products. The mobile version of the header includes a "hamburger" menu button and a hidden navbar menu with identical functionality to the desktop version.
-   The `"Categories"` section initially displays a list of 8 products with discounts and is represented as cards containing relevant product information, including the category, image, title, prices, and rating. This data is asynchronously received from the database when page is loaded. To see all the products, user can click on _"Load More"_ button. This action triggers asynchronous call to server that returns a list of all existing products. To get back to the list of 8 products, user can click on _"Hide All"_ button.
-   Similarly, the `"Offer"` section also displays the same product data as the `"Categories"` section, but contains only 4 product cards.
-   User is able to click on the product card, which will trigger the display of `"Modal"` containing extended product data. From there user is able to add the product to the cart.
-   `"Cart"` contains a list of ordered products with the quantity that can be dynamically changed. Also, product can be removed. _"Total cost"_ and _"Discount"_ values are dynamically counted depending on the list of products in the cart.
-   To make an order, the user should fill out the form that is invoked by click on _"To order"_ button. Form is standardly validated. Data after submitting the form by clicking on _"Confirm"_ button is posted to database.
-   Successful response triggers redirect to `"Thank you"` page.
-   Any redirects to non-existant pages trigger redirect to `"404"` page. User is able to get back to `"Home"` page by clicking on _"Go to Homepage"_ button.

### Backend:

-   `Node` provides the backend environment for this application.
-   `Express` middleware is used to handle HTTP-requests and routes.
-   `MongoDB Atlas` is used to store the data for both products and orders made by users.
-   The data is stored in a structured format and is easily retrievable using the `GET` method (for products) and is sent to DB with `POST` method (for orders).
-   `Mongoose` schemas to model the application data, search and manipulate data in a `MongoDB` database.

## Authors

Irina Kosogor

Figma layout is provided by Sigma University

## Version History

-   1.0
    -   Initial Release
