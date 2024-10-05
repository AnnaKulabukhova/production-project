import { getArticlesPageInit } from '../../selectors/articlesPageSelectors';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';
import { articlesPageActions } from '../../slices/articlesPageSlice';
import { createAsyncThunk } from '@reduxjs/toolkit';
import type { ThunkConfig } from '@/app/providers/StoreProvider';
import type { ArticleSortField, ArticleType } from '@/entities/Article';
import type { SortOrder } from '@/shared/types/sort';

export const initArticlesPage = createAsyncThunk<void, URLSearchParams, ThunkConfig<string>>(
  'articlePage/initArticlesPage',
  async (URLSearchParams, thunkAPI) => {
    const { getState, dispatch } = thunkAPI;
    const init = getArticlesPageInit(getState());

    if (!init) {
      const orderFromUrl = URLSearchParams.get('order') as SortOrder;
      const sortFromUrl = URLSearchParams.get('sort') as ArticleSortField;
      const searchFromUrl = URLSearchParams.get('search');
      const typeFromUrl = URLSearchParams.get('type') as ArticleType;

      if (orderFromUrl) {
        dispatch(articlesPageActions.setOrder(orderFromUrl));
      }

      if (sortFromUrl) {
        dispatch(articlesPageActions.setSort(sortFromUrl));
      }

      if (searchFromUrl) {
        dispatch(articlesPageActions.setSearch(searchFromUrl));
      }

      if (typeFromUrl) {
        dispatch(articlesPageActions.setType(typeFromUrl));
      }

      dispatch(articlesPageActions.initState());
      dispatch(fetchArticlesList({}));
    }
  },
);
