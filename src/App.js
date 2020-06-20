import React from "react";
import "./App.less";
import { Card, Divider } from "antd";
import FadeIn from "react-fade-in";

const { Meta } = Card;

class App extends React.Component {
    state = { phones: [], tablets: [] };
    componentDidMount() {
        this.getPhones();
        this.getTablets();
    }

    getPhones = async () => {
        const res = await fetch(" http://localhost:3004/phones?_limit=4", {
            method: "GET",
            headers: { "Content-Type": "application/json" },
        });
        const phones = await res.json();
        this.setState({ phones });
    };

    getTablets = async () => {
        const res = await fetch(" http://localhost:3004/tablets?_limit=4", {
            method: "GET",
            headers: { "Content-Type": "application/json" },
        });
        const tablets = await res.json();
        this.setState({ tablets });
    };

    render() {
        return (
            <>
                <div className='header'>
                    <div className='container header-container'>
                        <div className='logo'>Mobile Store</div>
                        <div className='right-nav'>
                            <div>Smartphone</div>
                            <div>Tablet</div>
                        </div>
                    </div>
                </div>
                <div className='container product-container'>
                    <div className='phone-list'>
                        <div className='list-title'>
                            <span>Điện thoại nổi bật</span>
                        </div>
                        <div className='phones-container'>
                            {this.state.phones.map(({ id, name, brand, thumbnail, price: p }) => (
                                <FadeIn className='card'>
                                    <Card key={id} hoverable cover={<img alt={name} src={thumbnail} />}>
                                        <Meta title={`${brand} ${name}`} description={`${parseInt(p).toLocaleString()}`} />
                                    </Card>
                                </FadeIn>
                            ))}
                        </div>
                    </div>
                    <Divider dashed />
                    <div className='tablet-list'>
                        <div className='list-title'>
                            <span>Tablet nổi bật</span>
                        </div>
                        <div className='tablets-container'>
                            {this.state.tablets.map(({ id, name, brand, thumbnail, price: p }) => (
                                <FadeIn className='card'>
                                    <Card key={id} hoverable cover={<img alt={name} src={thumbnail} />}>
                                        <Meta title={`${brand} ${name}`} description={`${parseInt(p).toLocaleString()}`} />
                                    </Card>
                                </FadeIn>
                            ))}
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default App;
