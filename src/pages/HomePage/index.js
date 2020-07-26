import React, { Component } from "react";
import { Card, Divider } from "antd";
import CardLoader from "../../components/CardLoader";
import FadeIn from "react-fade-in";
import { Link } from "react-router-dom";
import { getSneakerStart, getClothingStart } from "../../redux/actions";
import { connect } from "react-redux";

const { Meta } = Card;

class HomePage extends Component {
    componentDidMount() {
        this.props.getSneakersReq();
        this.props.getClothingsReq();
    }

    render() {
        return (
            <div className='container home-page'>
                <div className='products-container'>
                    <div className='list-title'>
                        <span>Sneaker nổi bật</span>
                    </div>

                    <div className='products-list'>
                        {this.props.isLoading ? (
                            <CardLoader numberOfCard={8} />
                        ) : (
                            this.props.sneakers.map((seaker) => (
                                <Link className='card' to={`/sneakers/${seaker.id}`}>
                                    <FadeIn>
                                        <Card hoverable cover={<img alt='' src={seaker.thumbnailUrl} />}>
                                            <Meta title={seaker.name} description={seaker.price} />
                                        </Card>
                                    </FadeIn>
                                </Link>
                            ))
                        )}
                    </div>
                </div>
                <Divider dashed />
                <div className='products-container'>
                    <div className='list-title'>
                        <span>Clothing nổi bật</span>
                    </div>
                    <div className='products-list'>
                        {this.props.CardLoader ? (
                            <CardLoader numberOfCard={8} />
                        ) : (
                            this.props.clothings.map((clothing) => (
                                <Link className='card' to={`/clothings/${clothing.id}`}>
                                    <FadeIn>
                                        <Card hoverable cover={<img alt='' src={clothing.thumbnailUrl} />}>
                                            <Meta title={clothing.name} description={clothing.price} />
                                        </Card>
                                    </FadeIn>
                                </Link>
                            ))
                        )}
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        sneakers: state.sneakers,
        clothings: state.clothings,
        isLoading: state.isLoading,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        getSneakersReq: () => dispatch(getSneakerStart(4, 1)),
        getClothingsReq: () => dispatch(getClothingStart()),
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
