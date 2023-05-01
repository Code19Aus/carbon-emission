import { Card, Input, Table, notification } from 'antd';
import { useState, useEffect } from 'react';
import type { EpcLog } from '../models/EpcLog';

type Props = {}

const ProductLogPage = (props: Props) => {
    const [api, contextHolder] = notification.useNotification();
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState<EpcLog[]>([]);

    useEffect(() => {
        !data.length && fetchProductLog();
    }, []);


    const fetchProductLog = async () => {
        setLoading(true);
        try {
            const response = await fetch('https://api.qlytics.xyz/epc/all', {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2NjZWI5ZTg0ODFkMzNjOWQwMWFkYTUiLCJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsInByb2ZpbGVQaWMiOiIiLCJpc0FkbWluIjpmYWxzZSwiY3JlYXRlZEF0IjoiMjAyMy0wMS0yMlQwNzo1NDowNi4wNDlaIiwidXBkYXRlZEF0IjoiMjAyMy0wMS0yMlQwNzo1NDowNi4wNDlaIiwiX192IjowLCJpYXQiOjE2ODA0OTQzNjQsImV4cCI6MTcxMjAzMDM2NH0.3EhC5Uz5fFC2qNaFLcp_tyEoaBWfa_ECBJS2B9S76ls`
                }
            });

            const result = await response.json();
            if (!response.ok) {
                throw new Error("Failed to fetch product log");
            }
            setData(result.message);
        } catch (error: any) {
            api.info({
                message: `Failed`,
                description: error.message,
                placement: 'topRight',
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            {contextHolder}
            <Card
                title='Product Logs Table'
                extra={<Input.Search placeholder='Search...' />}
            >
                <Table
                    dataSource={data.map((rec, index) => ({ ...rec, key: `${index}-${rec.epcId}` }))}
                    loading={loading}
                    scroll={{
                        x: 767
                    }}
                    pagination={{
                        showTotal: (total, range) => `${range[0]}-${range[1]} of ${total} items`,
                    }}
                    columns={[
                        {
                            title: 'Product Code',
                            render: (_, rec) => rec.epcId,
                            sorter: (a, b) => a.epcId - b.epcId,
                        },
                        {
                            title: 'Item Code',
                            render: (_, rec) => rec.epcId
                        },
                        {
                            title: 'Last Process Code',
                            render: (_, _rec) => 'W3011B1'
                        },
                        {
                            title: 'Location',
                            render: (_, rec) => rec.floorNo
                        },
                        {
                            title: 'Accumulated Carbon',
                            render: (_, rec) => rec.timeBetweenEntryExit
                        },
                        {
                            title: 'Last Reading Time',
                            render: (_, rec) => new Date(rec.readingTime).toLocaleString(),
                            sorter: (a, b) => new Date(a.readingTime).getTime() - new Date(b.readingTime).getTime(),
                        },
                    ]}
                />
            </Card>

        </>
    )
}

export default ProductLogPage