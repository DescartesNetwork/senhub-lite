import { useCallback } from 'react'

import { Col, Row, Space, Switch, Typography } from 'antd'
import IonIcon from 'shared/antd/ionicon'

import {
  useRootDispatch,
  useRootSelector,
  RootDispatch,
  RootState,
} from 'os/store'
import { setTheme } from 'os/store/ui.reducer'

const Theme = () => {
  const dispatch = useRootDispatch<RootDispatch>()
  const {
    ui: { theme },
  } = useRootSelector((state: RootState) => state)

  const onSwitch = useCallback(
    (checked: boolean) => dispatch(setTheme(checked ? 'dark' : 'light')),
    [dispatch],
  )

  return (
    <Row gutter={[12, 12]}>
      <Col flex="auto">
        <Space size={15}>
          <IonIcon
            className="action-center-icon "
            name={theme === 'dark' ? 'moon-outline' : 'sunny-outline'}
          />
          <Typography.Text>
            {theme.charAt(0).toLocaleUpperCase() + theme.slice(1)} theme
          </Typography.Text>
        </Space>
      </Col>
      <Col>
        <Switch size="small" checked={theme === 'dark'} onChange={onSwitch} />
      </Col>
    </Row>
  )
}

export default Theme
