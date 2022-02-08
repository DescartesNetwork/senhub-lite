import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import configs from 'os/configs'

const {
  register: { senreg, extra },
} = configs

/**
 * Interface & Utility
 */

export type PageState = {
  register: SenReg
  appIds: AppIds
}

const fetchRegister = async () => {
  try {
    const res = await fetch(senreg)
    return await res.json()
  } catch (er) {
    return {}
  }
}

/**
 * Store constructor
 */

const NAME = 'page'
const initialState: PageState = {
  register: {},
  appIds: ['sen_swap', 'sen_lp', 'sen_farming'],
}

/**
 * Actions
 */

// Must fetch register at very first of the process
export const loadRegister = createAsyncThunk(
  `${NAME}/loadRegister`,
  async () => {
    const register = await fetchRegister()
    return { register: { ...register, ...extra } }
  },
)

/**
 * Usual procedure
 */

const slice = createSlice({
  name: NAME,
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    void builder.addCase(
      loadRegister.fulfilled,
      (state, { payload }) => void Object.assign(state, payload),
    ),
})

export default slice.reducer
