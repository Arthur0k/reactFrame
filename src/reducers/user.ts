import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

interface initialStateType {
  loading: string
  users: []
}

const initialState = {
  loading: 'idle',
  users: []
} as initialStateType

const fetchData = createAsyncThunk('user/fetchData', async (id) => {
  const res = await 1
  return res
})

const userReducer = createSlice({
  name: 'user',
  initialState,
  reducers: {
    showLoading(state, action) {
      if (state.loading == 'idle') {
        state.loading = 'pending'
      }
    },
    hideLoading(state, action) {
      if (state.loading === 'pending') {
        state.loading = 'idle'
        state.users = action.payload
      }
    }
  },
  extraReducers: {
    [fetchData.fulfilled]: (state, action) => {
      state.loading = 'idle'
    }
  }
})

export const {showLoading, hideLoading}  = userReducer.actions
