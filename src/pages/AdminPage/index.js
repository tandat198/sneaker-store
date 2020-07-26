import React from "react";
import "./style.less";
import { Table, InputNumber, Input, Select, Button, Modal } from "antd";
import { getAdminStart, getCateStart, createAdminStart } from "../../redux/actions";
import { connect } from "react-redux";

const { Option } = Select;

class AdminPage extends React.Component {
    state = {
        products: [],
        showModel: false,
        productName: "",
        price: 1000000,
        category: "Lucy",
        categoryList: [],
        url: "",
        thumUrl: "",
        selectedRowKeys: [],
    };

    openModal = () => {
        this.setState({ showModel: true });
        this.props.getCategoriesReq();
    };
    createProduct = () => {
        this.setState({ showModel: false });
        this.props.createAdminProductReq({
            name: this.state.productName,
            thumbnailUrl: this.state.thumUrl,
            imageUrl: this.state.url,
            price: this.state.price,
            category: this.state.category,
        });
    };
    closeModal = () => {
        this.setState({ showModel: false });
    };
    handleProductname = (e) => {
        this.setState({ productName: e.target.value });
    };
    handleUrl = (e) => {
        this.setState({ url: e.target.value });
    };
    handleThumUrl = (e) => {
        this.setState({ thumUrl: e.target.value });
    };
    handlePrice = (e) => {
        this.setState({ price: e.target.value });
    };
    handleOption = (value) => {
        this.setState({ category: value });
    };
    componentDidMount() {
        this.props.getAdminProductReq();
    }

    onSelectChange = (selectedRowKeys) => {
        console.log("selectedRowKeys changed: ", selectedRowKeys);
        this.setState({ selectedRowKeys });
    };
    render() {
        const { selectedRowKeys } = this.state;
        const columns = [
            {
                title: "Tên sản phẩm",
                dataIndex: "name",
                key: "a",
            },
            {
                title: "Giá",
                dataIndex: "price",
                key: "b",
            },
        ];
        const rowSelection = {
            selectedRowKeys,
            onChange: this.onSelectChange,
        };
        return (
            <div className='container'>
                <div>Quản lý sản phẩm</div>
                <div className='modal-container'>
                    <Button type='primary' onClick={this.openModal}>
                        Tạo sản phẩm
                    </Button>
                    <Modal
                        title='Basic Modal'
                        visible={this.state.showModel}
                        onOk={this.createProduct}
                        onCancel={this.closeModal}
                    >
                        <form>
                            <Input placeholder='Tên sản phẩm' onChange={this.handleProductname} />
                            <Input placeholder='Image Url' onChange={this.handleUrl} />
                            <Input placeholder='Thumbnail Url' onChange={this.handleThumUrl} />
                            <InputNumber
                                min={100000}
                                max={15000000}
                                defaultValue={1000000}
                                onChange={this.handlePrice}
                            />
                            <Select defaultValue='lucy' style={{ width: 120 }} onChange={this.handleOption}>
                                {this.props.categories.map((cate) => (
                                    <Option value={cate.id}>{cate.name}</Option>
                                ))}
                            </Select>
                        </form>
                    </Modal>
                </div>
                <Table rowSelection={rowSelection} dataSource={this.props.adminProducts} columns={columns} />
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        adminProducts: state.adminProducts,
        total: state.total,
        categories: state.categories,
    };
};
const mapDisPatchToProps = (dispatch) => {
    return {
        getAdminProductReq: (pageSize, pageIndex) => dispatch(getAdminStart(pageSize, pageIndex)),
        getCategoriesReq: () => dispatch(getCateStart()),
        createAdminProductReq: (newProduct) => dispatch(createAdminStart(newProduct)),
    };
};

export default connect(mapStateToProps, mapDisPatchToProps)(AdminPage);
