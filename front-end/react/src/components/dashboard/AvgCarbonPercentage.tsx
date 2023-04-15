import { Card } from 'antd'
import React from 'react'
import { Area } from '@ant-design/plots';

type Props = {}

const AvgCarbonPercentage = (props: Props) => {
    const data = [
        {
            week: '1',
            accuracy_rate: 96,
        },
        {
            week: '2',
            accuracy_rate: 95,
        },
        {
            week: '3',
            accuracy_rate: 98,
        },
        {
            week: '4',
            accuracy_rate: 97,
        },
        {
            week: '5',
            accuracy_rate: 95,
        },
        {
            week: '6',
            accuracy_rate: 94,
        },
        {
            week: '7',
            accuracy_rate: 94,
        },
    ];
    return (
        <Card>
            <div style={{ marginBottom: 15 }}>
                <p className='uppercase'>AVG. CARBON PERCENTAGE</p>
                <h3 style={{ marginTop: 10, fontSize: 24 }}>96.73%</h3>
                <p style={{ opacity: 0.4 }}>Weekly</p>
            </div>
            <Area data={data} xField='week' yField='accuracy_rate' height={100} />
        </Card>
    )
}

export default AvgCarbonPercentage