import React, { Component } from "react";
import { Breadcrumb, Divider, Card, Button } from "antd";
import FadeIn from "react-fade-in";
import { Link } from "react-router-dom";
import { Pagination } from "antd";
import { getSneakerStart } from "../../redux/actions";
import { connect } from "react-redux";
import CardLoader from "../../components/CardLoader";
const { Meta } = Card;

class SneakersPage extends Component {
    componentDidMount() {
        this.props.getSneakersReq(8, 1);
    }

    changePage = (pageIndex, pageSize) => {
        this.props.getSneakersReq(pageSize, pageIndex);
    };

    render() {
        return (
            <div className='sneakers-page'>
                <div className='container main-content'>
                    <Breadcrumb>
                        <Breadcrumb.Item>
                            <Link to='/'>Trang chủ</Link>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>
                            <Link to='/phones'>Sneaker</Link>
                        </Breadcrumb.Item>
                    </Breadcrumb>
                    <Divider />
                    <div className='products-list'>
                        {this.props.isLoading ? (
                            <CardLoader numberOfCard={8} />
                        ) : (
                            this.props.sneakers.map((sneaker) => (
                                <>
                                    <FadeIn className='card'>
                                        <Link key={sneaker.id}>
                                            <Card hoverable cover={<img alt='' src={sneaker.thumbnailUrl} />}>
                                                <Meta title={sneaker.name} description={sneaker.price} />
                                            </Card>
                                        </Link>
                                        <Button type='primary'>Primary Button</Button>
                                    </FadeIn>
                                </>
                            ))
                        )}
                    </div>
                    <Pagination onChange={this.changePage} defaultCurrent={1} total={this.props.total} pageSize={8} />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        sneakers: state.sneakers,
        total: state.total,
        isLoading: state.isLoading,
    };
};

const mapDispatchToPros = (dispatch) => {
    return {
        getSneakersReq: (pageSize, pageIndex) => dispatch(getSneakerStart(pageSize, pageIndex)),
    };
};

export default connect(mapStateToProps, mapDispatchToPros)(SneakersPage);
