import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import type { StateSchema } from '@/app/providers/StoreProvider';
import type { Article } from '@/entities/Article';
import type { ArticleDetailsPageRecommendationsSchema } from '../../types/ArticleDetailsPageRecommendationsSchema';
import { fetchArticleRecommendations } from '../../services/fetchArticleRecomendations/fetchArticleRecomendations';

const recommendationsAdapter = createEntityAdapter<Article, string>({
  selectId: (article) => article.id,
});

export const getArticleRecommendations = recommendationsAdapter.getSelectors<StateSchema>((state: StateSchema) => {
  return state.articleDetailsPage?.recommendations || recommendationsAdapter.getInitialState();
});

const articleDetailsPageRecommendationsSlice = createSlice({
  name: 'articleDetailsPageRecommendationsSlice',
  initialState: recommendationsAdapter.getInitialState<ArticleDetailsPageRecommendationsSchema>({
    ids: [],
    entities: {},
    isLoading: false,
    error: undefined,
  }),
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticleRecommendations.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchArticleRecommendations.fulfilled, (state, action) => {
        state.isLoading = false;
        recommendationsAdapter.setAll(state, action.payload);
      })
      .addCase(fetchArticleRecommendations.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { reducer: articleDetailsPageRecommendationsReducer } = articleDetailsPageRecommendationsSlice;
