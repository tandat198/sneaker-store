import React, { Component } from "react";
import { Breadcrumb, Divider, Card } from "antd";
import FadeIn from "react-fade-in";

const { Meta } = Card;

class ClothingPage extends Component {
    render() {
        return (
            <div className='clothing-page'>
                <div className='container main-content'>
                    <Breadcrumb>
                        <Breadcrumb.Item>
                            <a href='/'>Trang chủ</a>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>
                            <a href='/tablets'>Clothing</a>
                        </Breadcrumb.Item>
                    </Breadcrumb>
                    <Divider />
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

export default ClothingPage;
