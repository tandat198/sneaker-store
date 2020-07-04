import React from "react";
import "./App.less";
import { Divider, Button, Card } from "antd";
import OrderPage from "./pages/OrderPage";
import { ShoppingCartOutlined } from "@ant-design/icons";
import axios from "axios";
import FadeIn from "react-fade-in";
import CardLoader from "./components/CardLoader";
import Header from "./components/Header";
import Homepage from "./pages/Homepage";
import PhonePage from "./pages/PhonePage";
import TabletPage from "./pages/TabletPage";
import ProductInfo from "./pages/ProductInfo";

const { Meta } = Card;

class App extends React.Component {
    state = { phones: [], tablets: [], phone: {}, tablet: {}, errors: {}, isLoading: false };
    getSmartphone = async () => {
        try {
            this.setState({ isLoading: true });
            const res = await axios.get(`https://crm-dnt.herokuapp.com/api/products?category=smartphone`);
            this.setState({ phones: res.data, isLoading: false });
        } catch (error) {
            const errors = {
                getPhones: "fail",
            };
            this.setState({ errors });
        }
    };
    getTablet = async () => {
        try {
            this.setState({ isLoading: true });
            const res = await axios.get(`https://crm-dnt.herokuapp.com/api/products?category=tablet`);
            this.setState({ tablets: res.data, isLoading: false });
        } catch (error) {
            const errors = {
                getTables: "fail",
            };
            this.setState({ errors });
        }
    };
    componentDidMount() {
        this.getSmartphone();
        this.getTablet();
    }

    render() {
        return (
            <>
                <Header />
                {/* <OrderPage /> */}
                <Homepage />

                {/* Phone Page */}
                <PhonePage />

                {/* Tablets Page */}
                <TabletPage />

                {/* Product Info */}
                <ProductInfo />
            </>
        );
    }
}

export default App;
