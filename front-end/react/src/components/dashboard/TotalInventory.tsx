import { Card } from 'antd'
import React from 'react'

type Props = {}

const TotalInventory = (props: Props) => {
    return (
        <Card>
            <div style={{ marginBottom: 15 }}>
                <p className='uppercase'>total inventory</p>
                <h3 style={{ marginTop: 10, fontSize: 24 }}>4,445 MT</h3>
                {/* <p style={{ opacity: 0.4 }}>Orders of last month</p> */}
            </div>
        </Card>
    )
}

export default TotalInventory