import React, { Fragment } from "react";
import "./App.less";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import SneakersPage from "./pages/SneakersPage";
import ClothingPage from "./pages/ClothingPage";
import ProductInfo from "./pages/ProductInfo";
import AdminPage from "./pages/AdminPage";
import CartPage from "./pages/CartPage";

function App() {
    return (
        <Fragment>
            <Header />
            <HomePage />
            <SneakersPage />
            <ClothingPage />
            <ProductInfo />
            <AdminPage />
            <CartPage />
        </Fragment>
    );
}

export default App;
