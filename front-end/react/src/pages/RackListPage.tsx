import { Button, Modal, Table } from 'antd';
import { useState } from 'react';
import racklist from '../data/racklist.json';

type Props = {}

const RackListPage = (props: Props) => {
    const [selectedRack, setSelectedRack] = useState<string>();

    const removeSelectedRack = () => {
        setSelectedRack(undefined);
    }

    const rackData = [
        {
            product_code: 'PR-000001',
            roll_id: 'R-000001',
            entry_date: '2021-01-01 00:00:00',
            remove_date: '2021-01-01 00:00:00',
        },
        {
            product_code: 'PR-000002',
            roll_id: 'R-000001',
            entry_date: '2021-01-01 00:00:00',
            remove_date: '2021-01-01 00:00:00',
        },
        {
            product_code: 'PR-000003',
            roll_id: 'R-000001',
            entry_date: '2021-01-01 00:00:00',
            remove_date: '2021-01-01 00:00:00',
        },
        {
            product_code: 'PR-000004',
            roll_id: 'R-000001',
            entry_date: '2021-01-01 00:00:00',
            remove_date: '2021-01-01 00:00:00',
        },
        {
            product_code: 'PR-000005',
            roll_id: 'R-000001',
            entry_date: '2021-01-01 00:00:00',
            remove_date: '2021-01-01 00:00:00',
        },
        {
            product_code: 'PR-000006',
            roll_id: 'R-000001',
            entry_date: '2021-01-01 00:00:00',
            remove_date: '2021-01-01 00:00:00',
        },
        {
            product_code: 'PR-000007',
            roll_id: 'R-000001',
            entry_date: '2021-01-01 00:00:00',
            remove_date: '2021-01-01 00:00:00',
        },
        {
            product_code: 'PR-000008',
            roll_id: 'R-000001',
            entry_date: '2021-01-01 00:00:00',
            remove_date: '2021-01-01 00:00:00',
        },
        {
            product_code: 'PR-000009',
            roll_id: 'R-000001',
            entry_date: '2021-01-01 00:00:00',
            remove_date: '2021-01-01 00:00:00',
        },
        {
            product_code: 'PR-000010',
            roll_id: 'R-000001',
            entry_date: '2021-01-01 00:00:00',
            remove_date: '2021-01-01 00:00:00',
        },
        {
            product_code: 'PR-000011',
            roll_id: 'R-000001',
            entry_date: '2021-01-01 00:00:00',
            remove_date: '2021-01-01 00:00:00',
        },
        {
            product_code: 'PR-000012',
            roll_id: 'R-000001',
            entry_date: '2021-01-01 00:00:00',
            remove_date: '2021-01-01 00:00:00',
        },
    ];

    return (
        <div>
            <Modal
                open={!!selectedRack}
                onCancel={removeSelectedRack}
                footer={null}
                centered
                width={800}
                style={{ overflow: 'auto' }}
            >
                <h3><span style={{ opacity: 0.7 }}>Rack ID:</span> <span className='text-primary'>{selectedRack}</span></h3>
                <Table
                    style={{ marginTop: 16 }}
                    rowKey={(rec) => `rack_${rec.product_code}`}
                    dataSource={rackData}
                    scroll={{ x: 700 }}
                    columns={[
                        {
                            title: 'Product Code',
                            dataIndex: 'product_code',
                        },
                        {
                            title: 'Roll ID',
                            dataIndex: 'roll_id',
                        },
                        {
                            title: 'Date Of Entry',
                            dataIndex: 'entry_date',
                        },
                        {
                            title: 'Date Of Removal',
                            dataIndex: 'remove_date',
                        }
                    ]}
                />
            </Modal>
            <h3>Rack List</h3>
            <Table
                style={{ marginTop: 16 }}
                rowKey={(rec) => `rack_${rec.rack_id}`}
                dataSource={racklist}
                scroll={{ x: 800 }}
                columns={[
                    {
                        title: 'Rack ID',
                        dataIndex: 'rack_id',
                    },
                    {
                        title: 'Occupied Capacity',
                        dataIndex: 'occupied_capacity',
                    },
                    {
                        title: 'Vacant Capacity',
                        dataIndex: 'vacant_capacity',
                    },
                    {
                        title: 'Last Edited',
                        dataIndex: 'last_edited',
                    },
                    {
                        title: 'Action',
                        render: (_, rec) => <Button type='primary' onClick={() => setSelectedRack(rec.rack_id)}>Details</Button>
                    }
                ]}
            />
        </div>
    )
}

export default RackListPage;