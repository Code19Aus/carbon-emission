import { Column } from '@ant-design/charts';
import { Card } from 'antd'

type Props = {}

const HourlyCarbonEmission = (props: Props) => {
    const data = [
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
    return (
        <Card>
            <div style={{ marginBottom: 15 }}>
                <p className='uppercase'>HOURLY CARBON EMISSION</p>
                <h3 style={{ marginTop: 10, fontSize: 24 }}>83.65%</h3>
                <p style={{ opacity: 0.4 }}>Daily</p>
            </div>
            <Column data={data} xField='day' yField='emission_rate' height={100} />
        </Card>
    )
}

export default HourlyCarbonEmission