import { useCallback, useEffect } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import { Layout, Row, Col, Card, Affix } from 'antd'
import PrivateRoute from 'os/components/privateRoute'
import Header from 'os/view/header'
import Welcome from 'os/view/welcome'
import Page from 'os/view/page'

import Watcher from 'os/view/watcher'

import {
  useRootSelector,
  RootState,
  useRootDispatch,
  RootDispatch,
} from 'os/store'
import { loadRegister } from 'os/store/page.reducer'
import 'os/static/styles/dark.os.less'
import 'os/static/styles/light.os.less'

const View = () => {
  const {
    ui: { theme },
  } = useRootSelector((state: RootState) => state)
  const dispatch = useRootDispatch<RootDispatch>()

  /**
   * Init the system
   */

  // Load DApp register
  const initRegister = useCallback(async () => {
    await dispatch(loadRegister())
  }, [dispatch])
  useEffect(() => {
    initRegister()
  }, [initRegister])
  // Load theme
  useEffect(() => {
    document.body.setAttribute('id', theme)
  }, [theme])

  return (
    <Layout>
      {/* Header */}
      <Affix>
        <Card
          style={{ borderRadius: '0px 0px 16px 16px', zIndex: 999 }}
          bodyStyle={{ padding: 16 }}
          bordered={false}
        >
          <Header />
        </Card>
      </Affix>
      {/* Body */}
      <Layout style={{ padding: '24px 12px 0px 12px' }}>
        <Row gutter={[24, 24]}>
          <Col span={24}>
            <Switch>
              <Route exact path="/welcome" component={Welcome} />
              <PrivateRoute path="/app/:appId" component={Page} />
              <Redirect from="*" to="/welcome" />
            </Switch>
          </Col>
        </Row>
      </Layout>
      {/* In-Background Run Jobs */}
      <Watcher />
    </Layout>
  )
}

export default View
