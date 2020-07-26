import React, { Component } from "react";
import { Breadcrumb, Divider, Card, Pagination } from "antd";
import FadeIn from "react-fade-in";
import { Link } from "react-router-dom";
import { getClothingStart } from "../../redux/actions";
import { connect } from "react-redux";
import CardLoader from "../../components/CardLoader";

const { Meta } = Card;

class ClothingPage extends Component {
    changePage = (pageIndex, pageSize) => {
        this.props.getClothingReq(pageSize, pageIndex);
    };
    componentDidMount() {
        this.props.getClothingReq(8, 1);
    }

    render() {
        return (
            <div className='clothing-page'>
                <div className='container main-content'>
                    <Breadcrumb>
                        <Breadcrumb.Item>
                            <Link to='/'>Trang chủ</Link>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>
                            <Link to='/tablets'>Clothing</Link>
                        </Breadcrumb.Item>
                    </Breadcrumb>
                    <Divider />
                    <div className='products-list'>
                        {this.props.isLoading ? (
                            <CardLoader numberOfCard={8} />
                        ) : (
                            this.props.clothings.map((clothing) => (
                                <Link className='card' key={clothing.id} to={`/clothings/${clothing.id}`}>
                                    <FadeIn>
                                        <Card hoverable cover={<img alt='' src={clothing.thumbnailUrl} />}>
                                            <Meta title={clothing.name} description={clothing.price} />
                                        </Card>
                                    </FadeIn>
                                </Link>
                            ))
                        )}
                    </div>
                    {this.props.isLoading ? null : (
                        <Pagination defaultCurrent={1} total={this.props.total} onChange={this.changePage} />
                    )}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        clothings: state.clothings,
        total: state.total,
        isLoading: state.isLoading,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getClothingReq: (pageSize, pageIndex) => dispatch(getClothingStart(pageSize, pageIndex)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ClothingPage);
