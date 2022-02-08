import { Row, Col, Button, Space, Popover, Typography, Divider } from 'antd'
import IonIcon from 'shared/antd/ionicon'
import Wallet from 'os/view/header/wallet'
import WalletInfo from './walletInfo'
import Network from './network'

import { useRootSelector, RootState } from 'os/store'
import { shortenAddress } from 'shared/util'
import Theme from './theme'

const ActionCenter = () => {
  const {
    wallet: { address: walletAddress },
  } = useRootSelector((state: RootState) => state)

  return (
    <Space>
      <Theme />
      <Popover
        trigger="click"
        content={
          <Row gutter={[16, 16]} style={{ maxWidth: 256 }}>
            <Col span={24}>
              <WalletInfo />
            </Col>
            <Col span={24}>
              <Divider style={{ margin: 0 }} />
            </Col>
            <Col span={24}>
              <Network />
            </Col>
            <Col span={24}>
              <Wallet />
            </Col>
          </Row>
        }
      >
        <Button type="text">
          <Typography.Text>
            {shortenAddress(walletAddress, 3, '...')}
          </Typography.Text>
          <IonIcon name="chevron-down-outline" />
        </Button>
      </Popover>
    </Space>
  )
}

export default ActionCenter
