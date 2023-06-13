import { Button, Card, Col, Row, Space, Table } from 'antd';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

const tableData = [
    {
        key: '1',
        epc: 'EPC-1',
        status: 'completed'
    },
    {
        key: '2',
        epc: 'EPC-2',
        status: 'completed'
    },
    {
        key: '3',
        epc: 'EPC-3',
        status: 'completed'
    },
    {
        key: '4',
        epc: 'EPC-4',
        status: 'completed'
    },
    {
        key: '5',
        epc: 'EPC-5',
        status: 'processing'
    },
    {
        key: '6',
        epc: 'EPC-6',
        status: 'processing'
    },
];

type Props = {}

const ProductListPage = (props: Props) => {
    return (
        <div>
            <Space direction='vertical' style={{ width: '100%' }} size={'middle'}>
                <h3>Products</h3>
                <Row>
                    <Col span={24} xl={12}>
                        <Table
                            dataSource={tableData}
                            pagination={false}
                            scroll={{ x: 400 }}
                            columns={[
                                {
                                    title: 'Product',
                                    render: (_value, _record, index) => `Product ${index + 1}`,
                                },
                                {
                                    title: 'EPC',
                                    render: (_value, rec) => `${rec.epc}`,
                                },
                                {
                                    title: 'Status',
                                    render: (_value, rec) => `${rec.status.toUpperCase()}`,
                                },
                                {
                                    title: 'Action',
                                    render: () => <Link to={'12'}><Button>Details</Button></Link>,
                                },
                            ]}
                        />
                    </Col>
                </Row>
            </Space>
        </div>
    )
}

export default ProductListPage