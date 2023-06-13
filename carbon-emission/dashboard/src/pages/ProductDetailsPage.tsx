import { Card, Timeline } from 'antd';

type Props = {}

const ProductDetailsPage = (props: Props) => {
    const ProcessOne = ({ title, carbon }: { title: string, carbon: number }) => <Card>
        <h3>{title}</h3>
        <hr style={{ marginTop: 10, marginBottom: 10, opacity: 0.3 }} />
        <p><b>Start time: </b>08:10AM - 11/06/2023</p>
        <p><b>End time: </b>10:10AM - 11/06/2023</p>
        <p><b>Total time: </b>02 hour</p>
        <p><b>Estimate carbon emitted: </b>{carbon} unit carbon</p>
    </Card>

    return (
        <div>
            <Card title="Info">
                <p><b>Total carbon emitted:</b> 9kg</p>
            </Card>
            <Card title="Process" style={{ marginTop: 16 }}>

                <Timeline
                    items={[
                        {
                            children: <ProcessOne title='knitting' carbon={2} />,
                        },
                        {
                            children: <ProcessOne title='warehouse' carbon={0.5} />,
                        },
                        {
                            children: <ProcessOne title='drying' carbon={2.2} />,
                        },
                        {
                            children: <ProcessOne title='washing' carbon={3} />,
                        },
                        {
                            children: <ProcessOne title='drying' carbon={2.3} />,
                        },
                        {
                            children: <ProcessOne title='stretching' carbon={1.8} />,
                        },
                        {
                            children: <ProcessOne title='warehouse' carbon={0.5} />,
                        },
                        {
                            children: <ProcessOne title='cutting' carbon={1.4} />,
                        },
                        {
                            children: <ProcessOne title='sewing' carbon={1.6} />,
                        },
                        {
                            children: <ProcessOne title='ironing' carbon={0.9} />,
                        },
                        {
                            children: <ProcessOne title='packing' carbon={0.8} />,
                        },
                        {
                            children: <ProcessOne title='shipping' carbon={1.7} />,
                        },
                    ]}
                />
            </Card>
        </div>
    )
}

export default ProductDetailsPage;