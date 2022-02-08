import { Row, Col, Typography } from 'antd'
import IonIcon from 'shared/antd/ionicon'

import { net, onSwitchNetwork } from 'shared/runtime'

const Network = () => {
  const next = net === 'mainnet' ? 'devnet' : 'mainnet'

  return (
    <Row gutter={[12, 12]} align="middle">
      <Col>
        <IonIcon name="earth-outline" />
      </Col>
      <Col flex="auto">
        <Typography.Text>{net}</Typography.Text>
      </Col>
      <Col>
        <Typography.Text
          type="secondary"
          style={{ cursor: 'pointer' }}
          onClick={() => onSwitchNetwork(next)}
        >
          switch to {next}
        </Typography.Text>
      </Col>
    </Row>
  )
}

export default Network
