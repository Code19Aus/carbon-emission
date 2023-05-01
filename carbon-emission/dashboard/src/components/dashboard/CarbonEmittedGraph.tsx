import { Area } from '@ant-design/charts';
import { Card } from 'antd';

type Props = {}

const CarbonEmittedGraph = (props: Props) => {
    const data = [
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
                <p className='uppercase'>CARBON EMITTED PER TON</p>
                <h3 style={{ marginTop: 10, fontSize: 24 }}>98s</h3>
                <p style={{ opacity: 0.4 }}>Weekly</p>
            </div>
            <Area data={data} xField='week' yField='emission_rate' height={100} />
        </Card>
    )
}

export default CarbonEmittedGraph