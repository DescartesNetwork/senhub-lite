import {
  createDispatchHook,
  createSelectorHook,
  createStoreHook,
  useDispatch,
  useSelector,
} from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import { RootContext } from '@senhub/context'
import { devTools, bigintSerializationMiddleware } from 'shared/devTools'

import ui from './ui.reducer'
import page from './page.reducer'
import wallet from './wallet.reducer'
import accounts from './accounts.reducer'
import mints from './mints.reducer'
import pools from './pools.reducer'

/**
 * Root types
 */
export type RootState = ReturnType<typeof store.getState>
export type RootDispatch = typeof store.dispatch

/**
 * Root hooks
 */
export const useRootStore = createStoreHook(RootContext)
export const useRootDispatch: typeof useDispatch =
  createDispatchHook(RootContext)
export const useRootSelector: typeof useSelector =
  createSelectorHook(RootContext)

/**
 * Root store
 */
const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware(bigintSerializationMiddleware),
  devTools: devTools('sentre'),
  reducer: {
    ui,
    page,
    wallet,
    accounts,
    mints,
    pools,
  },
})

export default store
