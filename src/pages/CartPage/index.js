import React, { Component } from "react";
import { Divider, Button } from "antd";
import "./style.less";

class CartPage extends Component {
    render() {
        return (
            <div className='cart-page'>
                <div className='container cart-container'>
                    <span className='title'>Giỏ hàng của bạn (2 sản phẩm)</span>
                    <Divider dashed />
                    <div className='order-list'>
                        <div className='order-item'>
                            <img
                                src='https://product.hstatic.net/1000361048/product/air-jordan-1-low-older-shoe-xlzjc6_dbdb626cd5844ac69599e606908d4174_master.jpg'
                                alt=''
                            />
                            <div>
                                <div className='product-name'>Air Force One</div>
                                <div className='product-quantity'>Số lượng: 1</div>
                                <div className='product-price'>Giá: 1900000</div>
                                <Button type='link'>Xóa khỏi giỏ hàng</Button>
                            </div>
                        </div>
                    </div>
                    <div className='calculate-price'>
                        <div className='total-price'>Thành tiền: 1990000</div>
                        <Button className='del-btn' size='large' type='ghost'>
                            Xóa giỏ hàng
                        </Button>
                        <Button size='large' type='primary'>
                            Đặt hàng
                        </Button>
                    </div>
                </div>
            </div>
        );
    }
}

export default CartPage;
