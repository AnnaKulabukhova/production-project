import { createAsyncThunk } from "@reduxjs/toolkit"
import { ThunkConfig } from "app/providers/StoreProvider";
import { Comment } from "entities/Comment";
import { getUserAuthData } from "entities/User";
import { getArticleDetailsData } from "entities/Article/model/selectors/articleDetails";
import { fetchCommentsByArticleId } from "../fetchCommentsByArticleId/fetchCommentsByArticleId";

export const addCommentForArticle = createAsyncThunk<Comment, string, ThunkConfig<string>>(
  'articleDetails/addCommentForArticle',
  async (text, thunkAPI) => {
    const { extra, dispatch, rejectWithValue, getState } = thunkAPI

    const useData = getUserAuthData(getState())
    console.log('getState', getState());

    const article = getArticleDetailsData(getState())

    console.log('jfjfj', !useData, !text, !article);

    if (!useData || !text || !article) {
      console.log('no data');
      return rejectWithValue('no data')
    }

    try {
      const response = await extra.api.post<Comment>(`/comments`, {
        articleId: article?.id,
        userId: useData?.id,
        text
      })

      if (!response.data) {
        throw new Error()
      }

      dispatch(fetchCommentsByArticleId(article?.id))
      return response.data


    } catch (e) {
      console.log(e)
      return rejectWithValue('error')
    }
  }
)