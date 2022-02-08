import { Row, Col } from 'antd'
import Theme from './theme'
import Network from './network'

const Settings = () => {
  return (
    <Row gutter={[16, 16]}>
      <Col span={12}>
        <Theme />
      </Col>
      <Col span={24}>
        <Network />
      </Col>
    </Row>
  )
}

export default Settings
