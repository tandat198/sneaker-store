import React from "react";
import "./App.less";
import { Card, Divider, Breadcrumb, Button, InputNumber } from "antd";
import FadeIn from "react-fade-in";

const { Meta } = Card;

class App extends React.Component {
    state = { phones: [], tablets: [], phone: {}, tablet: {} };

    render() {
        return (
            <>
                <div className='header'>
                    <div className='container header-container'>
                        <div className='logo'>
                            <a href='/'>Mobile Store</a>
                        </div>
                        <div className='right-nav'>
                            <a href='/phones'>Smartphone</a>
                            <a href='/tablets'>Tablet</a>
                        </div>
                    </div>
                </div>
                {/* Home Page */}
                <div className='container product-container'>
                    <div className='phone-list'>
                        <div className='list-title'>
                            <span>Điện thoại nổi bật</span>
                        </div>
                        <div className='phones-container'>
                            {/* <FadeIn className='card'>
                                    <Card key={id} hoverable cover={<img alt={name} src={thumbnail} />}>
                                        <Meta title={`${brand} ${name}`} description={`${parseInt(p).toLocaleString()}`} />
                                    </Card>
                                </FadeIn> */}
                        </div>
                    </div>
                    <Divider dashed />
                    <div className='tablet-list'>
                        <div className='list-title'>
                            <span>Tablet nổi bật</span>
                        </div>
                        <div className='tablets-container'></div>
                    </div>
                </div>

                {/* Phone Page */}
                {/* <div className='all-phones'>
                    <div className='container all-phones-container'>
                        <Breadcrumb>
                            <Breadcrumb.Item>
                                <a href='/'>Home</a>
                            </Breadcrumb.Item>
                            <Breadcrumb.Item>
                                <a href='/phones'>Phones</a>
                            </Breadcrumb.Item>
                        </Breadcrumb>
                        <Divider />
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
                </div>

                {/* Tablets Page */}
                {/* <div className='all-tablets'>
                    <div className='container all-tablets-container'>
                        <Breadcrumb>
                            <Breadcrumb.Item>
                                <a href='/'>Home</a>
                            </Breadcrumb.Item>
                            <Breadcrumb.Item>
                                <a href='/tablets'>Tablets</a>
                            </Breadcrumb.Item>
                        </Breadcrumb>
                        <Divider />
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
                </div> */}

                {/* Product Info */}
                {/* <div className='product-item'>
                    <div className='container product-container'>
                        <Breadcrumb>
                            <Breadcrumb.Item>
                                <a href='/'>Home</a>
                            </Breadcrumb.Item>
                            <Breadcrumb.Item>
                                <a href='/phones'>Phones</a>
                            </Breadcrumb.Item>
                            <Breadcrumb.Item>
                                <a href='/'>{phone.name}</a>
                            </Breadcrumb.Item>
                        </Breadcrumb>
                        <Divider />
                        <div className='info'>
                            <div className='basic-info'>
                                <div className='product-img'>
                                    <img src={phone.imageUrl} alt={phone.name} />
                                </div>
                                <div className='basic-info-wp'>
                                    <span>{`${phone.brand} ${phone.name}`}</span>
                                    <span>{parseInt(phone.price).toLocaleString()}</span>
                                    <div className='add-to-cart'>
                                        <div className='quantity'>
                                            <InputNumber min={1} max={10} defaultValue={1} />
                                        </div>
                                        <Button type='primary'>Add To Cart</Button>
                                    </div>
                                </div>
                            </div>
                            <ul className='detail-info'>
                                <li>Storage: {phone.storage} GB</li>
                                <li>Memory: {phone.memory} GB</li>
                                <li>Screen Size: {phone.screenSize} inches</li>
                                <li>Chipset: {phone.chipset}</li>
                                <li>OS: {phone.os}</li>
                            </ul>
                        </div>
                    </div>
                </div> */}
            </>
        );
    }
}

export default App;
