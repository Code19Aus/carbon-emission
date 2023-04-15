import { Card, Col, Row, Table } from 'antd'
import React from 'react'

type Props = {}

const OutletsPage = (props: Props) => {
    const data = [
        {
            key: '1',
            product: 1,
            no_of_item_left: 20,
            no_of_item_sold: 100,
            total_sell: 11000
        },
        {
            key: '2',
            product: 2,
            no_of_item_left: 30,
            no_of_item_sold: 85,
            total_sell: 9000
        },
        {
            key: '3',
            product: 3,
            no_of_item_left: 10,
            no_of_item_sold: 80,
            total_sell: 8000
        },
    ];
    return (
        <div>
            <h3>Outlet Overview</h3>
            <Row style={{ marginTop: 16 }} gutter={[16, 16]}>
                <Col span={24} xl={12}>
                    <Card title="Outlet 1">
                        <Table
                            dataSource={data}
                            columns={[
                                {
                                    title: 'Product',
                                    dataIndex: 'product',
                                },
                                {
                                    title: 'No. of Item Left',
                                    dataIndex: 'no_of_item_left',
                                },
                                {
                                    title: 'No. Of Item Sold',
                                    dataIndex: 'no_of_item_sold',
                                },
                                {
                                    title: 'Total Sell',
                                    dataIndex: 'total_sell',
                                    render: (value) => `$${value}`
                                },
                            ]}
                            pagination={false}
                        />
                    </Card>
                </Col>
                <Col span={24} xl={12}>
                    <Card title="Outlet 2">
                        <Table
                            dataSource={data}
                            columns={[
                                {
                                    title: 'Product',
                                    dataIndex: 'product',
                                },
                                {
                                    title: 'No. of Item Left',
                                    dataIndex: 'no_of_item_left',
                                },
                                {
                                    title: 'No. Of Item Sold',
                                    dataIndex: 'no_of_item_sold',
                                },
                                {
                                    title: 'Total Sell',
                                    dataIndex: 'total_sell',
                                    render: (value) => `$${value}`
                                },
                            ]}
                            pagination={false}
                        />
                    </Card>
                </Col>
                <Col span={24} xl={12}>
                    <Card title="Outlet 3">
                        <Table
                            dataSource={data}
                            columns={[
                                {
                                    title: 'Product',
                                    dataIndex: 'product',
                                },
                                {
                                    title: 'No. of Item Left',
                                    dataIndex: 'no_of_item_left',
                                },
                                {
                                    title: 'No. Of Item Sold',
                                    dataIndex: 'no_of_item_sold',
                                },
                                {
                                    title: 'Total Sell',
                                    dataIndex: 'total_sell',
                                    render: (value) => `$${value}`
                                },
                            ]}
                            pagination={false}
                        />
                    </Card>
                </Col>
                <Col span={24} xl={12}>
                    <Card title="Outlet 4">
                        <Table
                            dataSource={data}
                            columns={[
                                {
                                    title: 'Product',
                                    dataIndex: 'product',
                                },
                                {
                                    title: 'No. of Item Left',
                                    dataIndex: 'no_of_item_left',
                                },
                                {
                                    title: 'No. Of Item Sold',
                                    dataIndex: 'no_of_item_sold',
                                },
                                {
                                    title: 'Total Sell',
                                    dataIndex: 'total_sell',
                                    render: (value) => `$${value}`
                                },
                            ]}
                            pagination={false}
                        />
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default OutletsPage