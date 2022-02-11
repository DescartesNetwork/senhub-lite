import { Typography, Space } from 'antd'
import IonIcon from 'shared/antd/ionicon'

import { net, onSwitchNetwork } from 'shared/runtime'

const Network = () => {
  const next = net === 'mainnet' ? 'devnet' : 'mainnet'

  return (
    <Space
      size={15}
      style={{ cursor: 'pointer' }}
      onClick={() => onSwitchNetwork(next)}
    >
      <IonIcon className="action-center-icon " name="earth-outline" />
      <Typography.Text>Switch to {next}</Typography.Text>
    </Space>
  )
}

export default Network
