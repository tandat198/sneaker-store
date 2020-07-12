import React from "react";
import { Table } from "antd";

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
                <Table dataSource={dataSource} columns={columns} />
            </div>
        );
    }
}
