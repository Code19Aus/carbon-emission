import { Card, Space } from 'antd'
import React from 'react'

type Props = {}

const ProjectsPage = (props: Props) => {
    return (
        <Space direction='vertical' style={{ width: '100%' }}>
            <Card title="Active Projects"></Card>
            <Card title="Finished Projects"></Card>
            <Card title="Pending Projects"></Card>
        </Space>
    )
}

export default ProjectsPage