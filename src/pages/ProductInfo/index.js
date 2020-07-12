import React, { Component } from "react";
import "./style.less";
import { Breadcrumb, Divider, Button } from "antd";

class ProductInfo extends Component {
    state = { products: [] };
    render() {
        return (
            <div className='product-item'>
                <div className='container product-container'>
                    <Breadcrumb>
                        <Breadcrumb.Item>
                            <a href='/'>Home</a>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>
                            <a href='/phones'>Phones</a>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>
                            <a href='/'>Air Force One</a>
                        </Breadcrumb.Item>
                    </Breadcrumb>
                    <Divider />
                    <div className='info'>
                        <div className='basic-info'>
                            <img
                                src='https://product.hstatic.net/1000361048/product/air-jordan-1-low-older-shoe-xlzjc6_dbdb626cd5844ac69599e606908d4174_master.jpg'
                                alt=''
                            />
                        </div>
                        <ul className='detail-info'>
                            <h3 className='product-name'>Air Force One</h3>
                            <span className='product-price'>1990000</span>
                            <Button type='primary'>Thêm vào giỏ</Button>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductInfo;
