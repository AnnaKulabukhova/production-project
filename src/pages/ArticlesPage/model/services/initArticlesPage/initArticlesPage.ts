import { getArticlesPageInit } from "../../selectors/articlesPageSelectors"
import { fetchArticlesList } from "../fetchArticlesList/fetchArticlesList"
import { articlesPageActions } from "../../slices/articlesPageSlice"
import { createAsyncThunk } from "@reduxjs/toolkit"
import { ThunkConfig } from "app/providers/StoreProvider";

export const initArticlesPage = createAsyncThunk<void, void, ThunkConfig<string>>(
  'articlePage/initArticlesPage',
  async (_, thunkAPI) => {
    const { getState, dispatch } = thunkAPI
    const init = getArticlesPageInit(getState())

    if (!init) {
      dispatch(articlesPageActions.initState())
      dispatch(fetchArticlesList({ page: 1 }))
    }
  }
)