import React, { Component } from "react";
import "./style.less";
import { Breadcrumb, Divider, Button } from "antd";
import { connect } from "react-redux";
import { clearProductDetail, getSneakerDetailStart } from "../../redux/actions";
import { Link } from "react-router-dom";

class ProductInfo extends Component {
    state = { isSaved: false };

    componentDidUpdate() {
        if (Object.keys(this.props.sneakerDetail).length > 0 && !this.state.isSaved) {
            const { id: productId } = this.props.sneakerDetail;
            const recentProducts = JSON.parse(localStorage.getItem("recentProducts")) || [];

            if (!recentProducts.includes(productId)) {
                recentProducts.unshift(productId);
            }
            localStorage.setItem("recentProducts", JSON.stringify(recentProducts));
            this.setState({ isSaved: true });
        }
    }

    componentDidMount() {
        const { productId } = this.props.match.params;

        this.props.getSneakerDetailReq(productId);
    }
    componentWillUnmount() {
        this.props.clearProductDetailReq();
    }
    render() {
        const { sneakerDetail } = this.props;

        const LinkToAllProducts = () => {
            // if (this.props.match.url.includes("sneaker")) {
            //     return <Link to='/sneakers'>sneaker</Link>;
            // } else if (this.props.match.url.includes("clothing")) {
            //     return <Link to='/clothings'>clothing</Link>;
            // }
            switch (this.props.match.path.split("/")[1]) {
                case "sneakers":
                    return <Link to='/sneakers'>sneaker</Link>;

                case "clothings":
                    return <Link to='/clothings'>clothing</Link>;
                default:
                    return null;
            }
        };

        return (
            <div className='product-item'>
                <div className='container product-container'>
                    <Breadcrumb>
                        <Breadcrumb.Item>
                            <Link to='/'>Home</Link>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>
                            <LinkToAllProducts />
                        </Breadcrumb.Item>

                        <Breadcrumb.Item>
                            <Link to='/'>{sneakerDetail.name}</Link>
                        </Breadcrumb.Item>
                    </Breadcrumb>
                    <Divider />
                    <div className='info'>
                        <div className='basic-info'>
                            <img src={sneakerDetail.imageUrl} alt='' />
                        </div>
                        <ul className='detail-info'>
                            <h3 className='product-name'>{sneakerDetail.name}</h3>
                            <span className='product-price'>{sneakerDetail.price}</span>
                            <Button type='primary'>Thêm vào giỏ</Button>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        sneakerDetail: state.sneakerProduct,
        errs: state.errs,
        isLoading: state.isLoading,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getSneakerDetailReq: (productId) => dispatch(getSneakerDetailStart(productId)),
        clearProductDetailReq: () => dispatch(clearProductDetail()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductInfo);
