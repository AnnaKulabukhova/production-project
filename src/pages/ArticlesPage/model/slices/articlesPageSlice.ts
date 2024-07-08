import {
  PayloadAction,
  createEntityAdapter,
  createSlice,
} from '@reduxjs/toolkit'
import { StateSchema } from 'app/providers/StoreProvider'
import { Article, ArticlesViews } from 'entities/Article'
import { ArticlesPageSchema } from '../types/articlesPageSchema'
import { fetchArticlesList } from '../services/fetchArticlesList/fetchArticlesList'
import { ARTICLE_VIEW_LOCALSTORAGE_KEY } from 'shared/const/localStorage'

const articlesListAdapter = createEntityAdapter<Article, string>({
  selectId: (article) => article.id
})

export const getArticlesList = articlesListAdapter.getSelectors<StateSchema>((state: StateSchema) => {
  return state.articlesPage || articlesListAdapter.getInitialState()
})

const articlesPageSlice = createSlice({
  name: 'articlesPageSlice',
  initialState: articlesListAdapter.getInitialState<ArticlesPageSchema>({
    ids: [],
    entities: {},
    view: ArticlesViews.Small,
    isLoading: false,
    error: undefined
  }),
  reducers: {
    setView: ((state, action: PayloadAction<ArticlesViews>) => {
      state.view = action.payload
      localStorage.setItem(ARTICLE_VIEW_LOCALSTORAGE_KEY, action.payload)
    }),
    initState: (state) => {
      state.view = localStorage.getItem(ARTICLE_VIEW_LOCALSTORAGE_KEY) as ArticlesViews
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticlesList.pending, (state) => {
        state.isLoading = true
      })
      .addCase(fetchArticlesList.fulfilled, (
        state,
        action: PayloadAction<Article[]>,
      ) => {
        state.isLoading = false;
        articlesListAdapter.setAll(state, action.payload);
      })
      .addCase(fetchArticlesList.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
  }
})

export const { reducer: articlesPageReducer, actions: articlesPageActions } = articlesPageSlice;