import { Card, Divider, Space } from 'antd';
import { DualAxes } from '@ant-design/plots';

type Props = {}

const SalesAnalytics = (props: Props) => {
    const uvBillData = [
        {
            time: '2019-03',
            value: 350,
            type: 'uv',
        },
        {
            time: '2019-04',
            value: 900,
            type: 'uv',
        },
        {
            time: '2019-05',
            value: 300,
            type: 'uv',
        },
        {
            time: '2019-06',
            value: 450,
            type: 'uv',
        },
        {
            time: '2019-07',
            value: 470,
            type: 'uv',
        },
        {
            time: '2019-03',
            value: 220,
            type: 'bill',
        },
        {
            time: '2019-04',
            value: 300,
            type: 'bill',
        },
        {
            time: '2019-05',
            value: 250,
            type: 'bill',
        },
        {
            time: '2019-06',
            value: 220,
            type: 'bill',
        },
        {
            time: '2019-07',
            value: 362,
            type: 'bill',
        },
    ];
    const transformData = [
        {
            time: '2019-03',
            count: 800,
            name: 'a',
        },
        {
            time: '2019-04',
            count: 600,
            name: 'a',
        },
        {
            time: '2019-05',
            count: 400,
            name: 'a',
        },
        {
            time: '2019-06',
            count: 380,
            name: 'a',
        },
        {
            time: '2019-07',
            count: 220,
            name: 'a',
        },
        {
            time: '2019-03',
            count: 750,
            name: 'b',
        },
        {
            time: '2019-04',
            count: 650,
            name: 'b',
        },
        {
            time: '2019-05',
            count: 450,
            name: 'b',
        },
        {
            time: '2019-06',
            count: 400,
            name: 'b',
        },
        {
            time: '2019-07',
            count: 320,
            name: 'b',
        },
        {
            time: '2019-03',
            count: 900,
            name: 'c',
        },
        {
            time: '2019-04',
            count: 600,
            name: 'c',
        },
        {
            time: '2019-05',
            count: 450,
            name: 'c',
        },
        {
            time: '2019-06',
            count: 300,
            name: 'c',
        },
        {
            time: '2019-07',
            count: 200,
            name: 'c',
        },
    ];
    const config = {
        data: [uvBillData, transformData],
        xField: 'time',
        yField: ['value', 'count'],
        geometryOptions: [
            {
                geometry: 'column',
                isGroup: true,
                seriesField: 'type',
                columnWidthRatio: 0.4,
            },
            {
                geometry: 'line',
                seriesField: 'name',
                lineStyle: ({ name }: any) => {
                    if (name === 'a') {
                        return {
                            lineDash: [1, 4],
                            opacity: 1,
                        };
                    }

                    return {
                        opacity: 0.5,
                    };
                },
            },
        ],
    };
    return (
        <Card>
            <div style={{ marginBottom: 15 }}>
                <p className='uppercase'>Sales Analytics</p>
                <div className='center'>
                    <div>
                        <Space>
                            <Space>
                                <h2 className='text-primary'>$3.85k</h2>
                                <p style={{ opacity: 0.5 }}>Income</p>
                            </Space>
                            <Divider type='vertical' style={{ height: 50 }} />
                            <Space>
                                <h2>258</h2>
                                <p style={{ opacity: 0.5 }}>Sales</p>
                            </Space>
                            <Divider type='vertical' style={{ height: 50 }} />
                            <Space>
                                <h2>52k</h2>
                                <p style={{ opacity: 0.5 }}>Users</p>
                            </Space>
                        </Space>
                    </div>
                </div>

                <DualAxes {...config} style={{ marginTop: 25 }} />
            </div>
        </Card>
    )
}

export default SalesAnalytics