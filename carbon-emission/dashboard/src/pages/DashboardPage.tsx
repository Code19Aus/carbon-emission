import { Col, Row } from 'antd';
import AvgCarbonPercentage from '../components/dashboard/AvgCarbonPercentage';
import AvgCarbonScope from '../components/dashboard/AvgCarbonScope';
import CarbonEmittedGraph from '../components/dashboard/CarbonEmittedGraph';
import HourlyCarbonEmission from '../components/dashboard/HourlyCarbonEmission';
import InventoryReceived from '../components/dashboard/InventoryReceived';
import SalesAnalytics from '../components/dashboard/SalesAnalytics';
import TotalInventory from '../components/dashboard/TotalInventory';
import TotalOrder from '../components/dashboard/TotalOrder';

type Props = {}

const DashboardPage = (props: Props) => {

    return (
        <div>
            <Row gutter={[16, 16]}>
                <Col span={24} md={12} lg={8} xl={6}>
                    <TotalInventory />
                </Col>
                {/* <Col span={24} md={12} lg={8} xl={6}>
                    <TotalOrder />
                </Col> */}
                <Col span={24} md={12} lg={8} xl={6}>
                    <InventoryReceived />
                </Col>
                <Col span={24} md={12} lg={8} xl={6}>
                    <AvgCarbonPercentage />
                </Col>
                <Col span={24} md={12} lg={8} xl={6}>
                    <HourlyCarbonEmission />
                </Col>
                <Col span={24} md={12} lg={8} xl={6}>
                    <CarbonEmittedGraph />
                </Col>
                <Col span={24} md={12} lg={8} xl={6}>
                    <AvgCarbonScope type='1' />
                </Col>
                <Col span={24} md={12} lg={8} xl={6}>
                    <AvgCarbonScope type='2' />
                </Col>
                <Col span={24} md={12} lg={8} xl={6}>
                    <AvgCarbonScope type='3' />
                </Col>
                <Col span={24}>
                    <SalesAnalytics />
                </Col>
            </Row>
        </div>
    )
}

export default DashboardPage;