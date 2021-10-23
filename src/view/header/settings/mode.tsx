import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { Row, Col, Switch, Typography } from 'antd'

import { RootDispatch, RootState } from 'store'
import { setMode } from 'store/flags.reducer'

const Mode = () => {
  const dispatch = useDispatch<RootDispatch>()
  const history = useHistory()
  const { mode } = useSelector((state: RootState) => state.flags)

  const onSwitch = async (checked: boolean) => {
    const mode = checked ? 'professional' : 'focus'
    const page = checked ? '/dashboard' : '/page'
    await dispatch(setMode(mode))
    return history.push(page)
  }

  return (
    <Row gutter={[8, 8]}>
      <Col span={24}>
        <Row gutter={[8, 8]} wrap={false}>
          <Col flex="auto">
            <Typography.Text>Professional Mode</Typography.Text>
          </Col>
          <Col>
            <Switch
              size="small"
              checked={mode === 'professional'}
              onChange={onSwitch}
            />
          </Col>
        </Row>
      </Col>
      <Col span={24}>
        <Typography.Paragraph type="secondary">
          By enabling the professional mode, your workspace will be a screen of
          widgets.
        </Typography.Paragraph>
      </Col>
    </Row>
  )
}

export default Mode
