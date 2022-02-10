import { useHistory } from 'react-router-dom'
import { account } from '@senswap/sen-js'

import { Row, Col, Button, Space } from 'antd'
import IonIcon from 'shared/antd/ionicon'
import Wallet from 'os/view/header/wallet'
import Brand from 'os/components/brand'
import ActionCenter from '../actionCenter'

import { useRootSelector, RootState } from 'os/store'
import { net } from 'shared/runtime'

type NavButtonProps = {
  iconName: string
  title: string
  onClick: () => void
}

const NavButton = ({ iconName, title, onClick }: NavButtonProps) => {
  const { width } = useRootSelector((state: RootState) => state.ui)
  return (
    <Button
      size="small"
      type="text"
      icon={<IonIcon name={iconName} />}
      onClick={onClick}
    >
      {width >= 576 ? title : null}
    </Button>
  )
}

const Header = () => {
  const history = useHistory()
  const {
    wallet: { address: walletAddress },
    ui: { width, theme },
  } = useRootSelector((state: RootState) => state)

  return (
    <Row gutter={[12, 12]} align="middle" wrap={false}>
      <Col>
        <Brand
          style={{ height: 24, cursor: 'pointer', paddingRight: 12 }}
          lite={width < 768}
          darkTheme={theme === 'dark'}
          network={net}
        />
      </Col>
      <Col flex="auto">
        {account.isAddress(walletAddress) && (
          <Space align="center" size={12}>
            <NavButton
              iconName="swap-horizontal-outline"
              onClick={() => history.push('/app/sen_swap')}
              title="Swap"
            />
            <NavButton
              iconName="albums-outline"
              onClick={() => history.push('/app/sen_lp')}
              title="Liquidity"
            />
            <NavButton
              iconName="leaf-outline"
              onClick={() => history.push('/app/sen_farming')}
              title="Farm"
            />
          </Space>
        )}
      </Col>
      <Col>
        {!account.isAddress(walletAddress) ? <Wallet /> : <ActionCenter />}
      </Col>
    </Row>
  )
}

export default Header
