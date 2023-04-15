import { Column } from '@ant-design/charts'
import { Card } from 'antd'
import React from 'react'

type Props = {}

const InventoryReceived = (props: Props) => {
    const data = [
        {
            year: '2014',
            order: 7,
        },
        {
            year: '2015',
            order: 5,
        },
        {
            year: '2016',
            order: 14,
        },
        {
            year: '2017',
            order: 20,
        },
        {
            year: '2018',
            order: 18,
        },
        {
            year: '2019',
            order: 16,
        },
        {
            year: '2020',
            order: 22,
        }
    ];

    return (
        <Card>
            <div style={{ marginBottom: 15 }}>
                <p className='uppercase'>INVENTORY RECEIVED</p>
                <h3 style={{ marginTop: 10, fontSize: 24 }}>10000 Pieces</h3>
                <p style={{ opacity: 0.4 }}>Yearly</p>
            </div>
            <Column data={data} xField='year' yField='order' height={100} />
        </Card>
    )
}

export default InventoryReceived