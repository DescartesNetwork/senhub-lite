import { useCallback } from 'react'

import { Switch } from 'antd'
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
    <Switch
      size="small"
      checkedChildren={<IonIcon name="moon-outline" />}
      unCheckedChildren={<IonIcon name="sunny-outline" />}
      checked={theme === 'dark'}
      onChange={onSwitch}
    />
  )
}

export default Theme
