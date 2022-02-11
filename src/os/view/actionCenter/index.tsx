import { Row, Col, Button, Space, Popover, Typography } from 'antd'
import IonIcon from 'shared/antd/ionicon'
import WalletInfo from './walletInfo'
import Network from './network'

import {
  useRootSelector,
  RootState,
  useRootDispatch,
  RootDispatch,
} from 'os/store'
import { shortenAddress } from 'shared/util'
import Theme from './theme'
import WalletAvatar from './walletAvatar'
import { disconnectWallet } from 'os/store/wallet.reducer'

import './index.os.less'

const ActionCenter = () => {
  const dispatch = useRootDispatch<RootDispatch>()
  const {
    wallet: { address: walletAddress },
  } = useRootSelector((state: RootState) => state)

  return (
    <Space>
      <Popover
        trigger="click"
        placement="bottomRight"
        title={<WalletInfo />}
        content={
          <Row gutter={[16, 16]} style={{ maxWidth: 194 }}>
            <Col span={24}>
              <Theme />
            </Col>
            <Col span={24}>
              <Network />
            </Col>
            <Col span={24}>
              <Space
                size={15}
                style={{ cursor: 'pointer' }}
                onClick={() => dispatch(disconnectWallet())}
              >
                <IonIcon className="action-center-icon " name="power-outline" />
                <Typography.Text>Disconnect</Typography.Text>
              </Space>
            </Col>
          </Row>
        }
      >
        <Button style={{ fontWeight: 500, padding: '3px 12px' }} type="ghost">
          <Space size={16}>
            <Typography.Text>
              <Space>
                <WalletAvatar />
                {shortenAddress(walletAddress, 3, '...')}
              </Space>
            </Typography.Text>
            <IonIcon style={{ color: '#7A7B85' }} name="chevron-down-outline" />
          </Space>
        </Button>
      </Popover>
    </Space>
  )
}

export default ActionCenter
