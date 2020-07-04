import React, { Component } from "react";
import { Button, Card, Divider } from "antd";
import CardLoader from "../../components/CardLoader";
import FadeIn from "react-fade-in";
import Meta from "antd/lib/card/Meta";

class Homepage extends Component {
    render() {
        return (
            <div className='container product-container'>
                <div className='phone-list'>
                    <div className='list-title'>
                        <span>Điện thoại nổi bật</span>
                    </div>

                    {this.state.errors.getPhones ? (
                        <Button onClick={this.getSmartphone}>Vui long tai lai</Button>
                    ) : null}
                    <div className='phones-container'>
                        {this.state.isLoading ? (
                            <CardLoader numberOfCard={4} />
                        ) : (
                            this.state.phones.map((phone) => (
                                <FadeIn className='card' key={phone.id}>
                                    <Card hoverable cover={<img alt={phone.name} src={phone.thumbnailUrl} />}>
                                        <Meta title={`${phone.name}`} description={`${phone.price.toLocaleString()}`} />
                                    </Card>
                                </FadeIn>
                            ))
                        )}
                    </div>
                </div>
                <Divider dashed />
                <div className='tablet-list'>
                    <div className='list-title'>
                        <span>Tablet nổi bật</span>
                        {this.state.errors.getTables ? (
                            <Button onClick={this.getTablet}>Vui long tai lai</Button>
                        ) : null}
                    </div>
                    <div className='tablets-container'>
                        {this.state.isLoading ? (
                            <CardLoader numberOfCard={4} />
                        ) : (
                            this.state.tablets.map((tablet) => (
                                <FadeIn className='card' key={tablet.id}>
                                    <Card hoverable cover={<img alt={tablet.name} src={tablet.thumbnailUrl} />}>
                                        <Meta
                                            title={`${tablet.name}`}
                                            description={`${tablet.price.toLocaleString()}`}
                                        />
                                    </Card>
                                </FadeIn>
                            ))
                        )}
                    </div>
                </div>
            </div>
        );
    }
}

export default Homepage;
