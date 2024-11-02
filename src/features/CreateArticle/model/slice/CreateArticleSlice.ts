// import { PayloadAction, createSlice } from '@reduxjs/toolkit'
// import {CreateArticleSchema } from '../types/CreateArticleSchema'

// const initialState: CreateArticleSchema = {

// }

// export const createArticleSlice = createSlice({
//   name: 'createArticle',
//   initialState,
//   reducers: {
//     template: (state, action: <PayloadAction<string>>) => {

//     }
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchArticleById.pending, (state) => {
//         state.isLoading = true
//       })
//       .addCase(fetchArticleById.fulfilled, (state, action: PayloadAction<>) => {
//         state.isLoading = false
//         state.data = action.payload
//       })
//       .addCase(fetchArticleById.rejected, (state, action) => {
//         state.isLoading = false
//         state.error = action.payload
//       })
//   }
// })

// export const { actions: createArticleActions } = createArticleSlice;
// export const { reducer: createArticlesReducer } = createArticleSlice;