import React from "react";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className='header'>
            <div className='container header-container'>
                <div className='logo'>
                    <Link to='/'>Mobile Store</Link>
                </div>
                <div className='right-nav'>
                    <Link to='/admin'>Admin</Link>
                    <Link to='/sneakers'>Sneaker</Link>
                    <Link to='/clothings'>Clothing</Link>
                    <Link to='/'>
                        <ShoppingCartOutlined style={{ fontSize: "2rem" }} />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Header;
