import { Column } from '@ant-design/charts'
import { Card } from 'antd'
import React from 'react'

type Props = {}

const TotalOrder = (props: Props) => {
    const data = [
        {
            type: 'Week 1',
            order: 38,
        },
        {
            type: 'Week 2',
            order: 52,
        },
        {
            type: 'Week 3',
            order: 61,
        },
        {
            type: 'Week 4',
            order: 145,
        }
    ];
    return (
        <Card>
            <div style={{ marginBottom: 15 }}>
                <p className='uppercase'>total order</p>
                <h3 style={{ marginTop: 10, fontSize: 24 }}>312</h3>
                <p style={{ opacity: 0.4 }}>Orders of last month</p>
            </div>
            <Column data={data} xField='type' yField='order' height={100} />
        </Card>
    )
}

export default TotalOrder