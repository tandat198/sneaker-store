import React from "react";
import "./style.less";
import { Table, InputNumber, Input, Select, Button, Modal } from "antd";

const { Option } = Select;

export default class AdminPage extends React.Component {
    render() {
        const dataSource = [
            {
                key: 1,
                name: "Air Force One",
                price: 199000,
                remainingQuantity: 100,
            },
        ];
        const columns = [
            {
                title: "Tên sản phẩm",
                dataIndex: "name",
                key: "name",
            },
            {
                title: "Giá",
                dataIndex: "price",
                key: "price",
            },
            {
                title: "Số lượng còn lại",
                dataIndex: "remainingQuantity",
                key: "quantity",
            },
        ];
        return (
            <div className='container'>
                <div>Quản lý sản phẩm</div>
                <div className='modal-container'>
                    <Button type='primary'>Tạo sản phẩm</Button>
                    <Modal title='Basic Modal' visible={false} onOk={this.handleOk} onCancel={this.handleCancel}>
                        <form>
                            <Input placeholder='Tên sản phẩm' />
                            <InputNumber min={100000} max={15000000} defaultValue={1000000} />
                            <Select defaultValue='lucy' style={{ width: 120 }}>
                                <Option value='jack'>Jack</Option>
                                <Option value='lucy'>Lucy</Option>
                            </Select>
                        </form>
                    </Modal>
                </div>
                <Table dataSource={dataSource} columns={columns} />
            </div>
        );
    }
}
