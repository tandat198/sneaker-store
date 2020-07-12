import React, { Component } from "react";
import { Button, Card, Divider } from "antd";
import CardLoader from "../../components/CardLoader";
import FadeIn from "react-fade-in";

const { Meta } = Card;

class HomePage extends Component {
    render() {
        return (
            <div className='container home-page'>
                <div className='products-container'>
                    <div className='list-title'>
                        <span>Sneaker nổi bật</span>
                    </div>
                    <div className='products-list'>
                        <a className='card'>
                            <FadeIn>
                                <Card
                                    hoverable
                                    cover={
                                        <img
                                            alt='Adidas Ultra Boost'
                                            src='https://product.hstatic.net/1000361048/product/air-jordan-1-low-older-shoe-xlzjc6_dbdb626cd5844ac69599e606908d4174_master.jpg'
                                        />
                                    }
                                >
                                    <Meta title='Adidas Ultra Boost' description='1450000' />
                                </Card>
                            </FadeIn>
                        </a>
                    </div>
                </div>
                <Divider dashed />
                <div className='products-container'>
                    <div className='list-title'>
                        <span>Clothing nổi bật</span>
                    </div>
                    <div className='products-list'>
                        <a className='card'>
                            <FadeIn>
                                <Card
                                    hoverable
                                    cover={
                                        <img
                                            alt=''
                                            src='https://product.hstatic.net/1000361048/product/air-jordan-1-low-older-shoe-xlzjc6_dbdb626cd5844ac69599e606908d4174_master.jpg'
                                        />
                                    }
                                >
                                    <Meta title='Adidas Ultra Boost' description='1450000' />
                                </Card>
                            </FadeIn>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomePage;
