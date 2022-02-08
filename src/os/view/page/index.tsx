import { useParams } from 'react-router-dom'

import { Row, Col } from 'antd'
import PageLoader from 'os/components/pageLoader'

import { useRootSelector, RootState } from 'os/store'

const Dashboard = () => {
  const { appId } = useParams<{ appId: string }>()
  const {
    page: { register },
  } = useRootSelector((state: RootState) => state)

  return (
    <Row gutter={[24, 24]}>
      <Col span={24}>
        <PageLoader {...(register[appId] as ComponentManifest)} />
      </Col>
    </Row>
  )
}

export default Dashboard
