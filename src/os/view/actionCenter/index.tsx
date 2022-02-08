import { Fragment } from 'react'

import { Row, Col, Drawer, Button, Tabs } from 'antd'
import IonIcon from 'shared/antd/ionicon'
import Applications from './applications'
import Settings from './settings'
import Referral from './referral'

import {
  useRootDispatch,
  useRootSelector,
  RootDispatch,
  RootState,
} from 'os/store'
import { setVisibleActionCenter } from 'os/store/ui.reducer'

const ActionCenter = () => {
  const dispatch = useRootDispatch<RootDispatch>()
  const {
    ui: { visibleActionCenter },
  } = useRootSelector((state: RootState) => state)

  return (
    <Fragment>
      <Button
        type="text"
        icon={<IonIcon name="menu" style={{ fontSize: 20 }} />}
      />
      <Drawer
        visible={visibleActionCenter}
        onClose={() => dispatch(setVisibleActionCenter(false))}
        closable={false}
        contentWrapperStyle={{ width: '95%', maxWidth: 400 }}
        destroyOnClose
      >
        <Row gutter={[16, 16]} style={{ marginTop: -16 }}>
          <Col span={24}>
            <Tabs
              style={{ overflow: 'visible' }}
              tabBarExtraContent={
                <Button
                  type="text"
                  icon={<IonIcon name="close" />}
                  onClick={() => dispatch(setVisibleActionCenter(false))}
                />
              }
              destroyInactiveTabPane
            >
              <Tabs.TabPane
                tab={
                  <span>
                    <IonIcon name="grid-outline" />
                    Apps
                  </span>
                }
                key="applications"
              >
                <Applications />
              </Tabs.TabPane>
              <Tabs.TabPane
                tab={
                  <span>
                    <IonIcon name="person-outline" />
                    User
                  </span>
                }
                key="referral"
              >
                <Referral />
              </Tabs.TabPane>
              <Tabs.TabPane
                tab={
                  <span>
                    <IonIcon name="settings-outline" />
                    Settings
                  </span>
                }
                key="system-settings"
              >
                <Settings />
              </Tabs.TabPane>
            </Tabs>
          </Col>
        </Row>
      </Drawer>
    </Fragment>
  )
}

export default ActionCenter
