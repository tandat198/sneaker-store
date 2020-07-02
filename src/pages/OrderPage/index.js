import React, { Component } from "react";
import { Divider, Button } from "antd";
import "./style.less";

class CartPage extends Component {
    render() {
        return (
            <div className='cart'>
                <div className='container'>
                    <span className='title'>Giỏ hàng của bạn (2 sản phẩm)</span>
                    <Divider dashed />
                    <div className='order-list'>
                        <div className='order-item'>
                            <img
                                src='https://cdn.cellphones.com.vn/media/catalog/product/cache/7/small_image/220x175/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone-11-pro-max-space-select-2019.png'
                                alt=''
                            />
                            <div>
                                <div className='product-name'>iPhone XS Max</div>
                                <div className='product-quantity'>Số lượng: 1</div>
                                <div className='product-price'>Giá: 19900000</div>
                                <Button type='link'>Xóa khỏi giỏ hàng</Button>
                            </div>
                        </div>
                        <div className='order-item'>
                            <img
                                src='https://cdn.cellphones.com.vn/media/catalog/product/cache/7/small_image/220x175/9df78eab33525d08d6e5fb8d27136e95/i/p/iphone-11-pro-max-space-select-2019.png'
                                alt=''
                            />
                            <div>
                                <div className='product-name'>iPhone XS Max</div>
                                <div className='product-quantity'>Số lượng: 1</div>
                                <div className='product-price'>Giá: 19900000</div>
                                <Button type='link'>Xóa khỏi giỏ hàng</Button>
                            </div>
                        </div>
                    </div>
                    <div className='calculate-price'>
                        <div className='total-price'>Thành tiền: 20990000</div>
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
