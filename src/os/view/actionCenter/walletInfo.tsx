import { useState } from 'react'

import { Row, Col, Tooltip, Typography, Popover } from 'antd'
import QRCode from 'qrcode.react'
import CopyToClipboard from 'react-copy-to-clipboard'
import IonIcon from 'shared/antd/ionicon'

import { useRootSelector, RootState } from 'os/store'
import { shortenAddress } from 'shared/util'

const QR = ({ address }: { address: string }) => {
  return (
    <Popover
      placement="bottomLeft"
      color="#ffffff"
      overlayInnerStyle={{ paddingTop: 6 }}
      content={
        <QRCode
          value={address}
          size={140}
          bgColor="#ffffff"
          fgColor="#1f1f1f"
        />
      }
      trigger="click"
      arrowPointAtCenter
    >
      <IonIcon name="qr-code-outline" style={{ cursor: 'pointer' }} />
    </Popover>
  )
}

const WalletInfo = () => {
  const { address } = useRootSelector((state: RootState) => state.wallet)
  const [copied, setCopied] = useState(false)

  const onCopy = async () => {
    setCopied(true)
    setTimeout(() => {
      setCopied(false)
    }, 1500)
  }

  return (
    <Row gutter={[12, 12]} align="middle">
      <Col flex="auto">
        <Typography.Text>{shortenAddress(address, 6, '...')}</Typography.Text>
      </Col>
      <Col>
        <Tooltip title="Copied" visible={copied}>
          <CopyToClipboard text={address} onCopy={onCopy}>
            <IonIcon name="copy-outline" style={{ cursor: 'pointer' }} />
          </CopyToClipboard>
        </Tooltip>
      </Col>
      <Col>
        <QR address={address} />
      </Col>
    </Row>
  )
}

export default WalletInfo
