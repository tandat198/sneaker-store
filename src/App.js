import React from "react";
import "./App.less";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import SneakersPage from "./pages/SneakersPage";
import ClothingPage from "./pages/ClothingPage";
import ProductInfo from "./pages/ProductInfo";
import AdminPage from "./pages/AdminPage";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route exact path='/' component={HomePage} />
                <Route exact path='/sneakers' component={SneakersPage} />
                <Route exact path='/admin' component={AdminPage} />
                <Route exact path='/clothings' component={ClothingPage} />
                <Route exact path='/sneakers/:productId' component={ProductInfo} />
                <Route exact path='/clothings/:productId' component={ProductInfo} />
            </Switch>
        </BrowserRouter>
        // <Fragment>
        //     <Header />
        //     <HomePage />
        //     <SneakersPage />
        //     <ClothingPage />
        //     <ProductInfo />
        //     <AdminPage />
        //     <CartPage />
        // </Fragment>
    );
}

export default App;
