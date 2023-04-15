import { Area, Column } from '@ant-design/charts'
import { Card } from 'antd'
import React from 'react'

type Props = {
    type: "1" | "2" | "3"
}

const AvgCarbonScope = (props: Props) => {
    const data1 = [
        {
            day: '1',
            emission_rate: 80,
        },
        {
            day: '2',
            emission_rate: 83,
        },
        {
            day: '3',
            emission_rate: 85,
        },
        {
            day: '4',
            emission_rate: 87,
        },
        {
            day: '5',
            emission_rate: 95,
        },
        {
            day: '6',
            emission_rate: 90,
        },
        {
            day: '7',
            emission_rate: 80,
        },
        {
            day: '8',
            emission_rate: 85,
        },
    ];
    const data2 = [
        {
            week: '1',
            emission_rate: 80,
        },
        {
            week: '2',
            emission_rate: 70,
        },
        {
            week: '3',
            emission_rate: 102,
        },
        {
            week: '4',
            emission_rate: 90,
        },
        {
            week: '5',
            emission_rate: 75,
        },
        {
            week: '6',
            emission_rate: 88,
        },
    ];
    return (
        <Card>
            <div style={{ marginBottom: 15 }}>
                <p className='uppercase'>AVG. CARBON SCOPE {props.type}</p>
                <h3 style={{ marginTop: 10, fontSize: 24 }}>94.79%</h3>
                <p style={{ opacity: 0.4 }}>Weekly</p>
            </div>
            {
                props.type === "2" ?
                    <Area data={data2} xField='week' yField='emission_rate' height={100} />
                    :
                    <Column data={data1} xField='day' yField='emission_rate' height={100} />
            }
        </Card>
    )
}

export default AvgCarbonScope