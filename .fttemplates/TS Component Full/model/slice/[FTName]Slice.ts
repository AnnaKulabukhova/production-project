import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import {<FTName>Schema } from '../types/<FTName>Schema'

const initialState: <FTName>Schema = {

}

export const <FTName | lowercasefirstchar>Slice = createSlice({
  name: '<FTName | lowercasefirstchar>',
  initialState,
  reducers: {
    template: (state, action: <PayloadAction<string>>) => {

    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticleById.pending, (state) => {
        state.isLoading = true
      })
      .addCase(fetchArticleById.fulfilled, (state, action: PayloadAction<>) => {
        state.isLoading = false
        state.data = action.payload
      })
      .addCase(fetchArticleById.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
  }
})

export const { actions: <FTName | lowercasefirstchar>Actions } = <FTName | lowercasefirstchar>Slice;
export const { reducer: <FTName | lowercasefirstchar>sReducer } = <FTName | lowercasefirstchar>Slice;