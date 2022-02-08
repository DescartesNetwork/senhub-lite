import { Row, Col } from 'antd'
import WalletIntro from './walletIntro'

const Applications = () => {
  return (
    <Row gutter={[24, 24]}>
      <Col span={24}>
        <WalletIntro />
      </Col>
    </Row>
  )
}

export default Applications
