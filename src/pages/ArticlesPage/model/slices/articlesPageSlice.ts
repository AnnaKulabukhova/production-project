import type { PayloadAction } from '@reduxjs/toolkit';
import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import type { StateSchema } from '@/app/providers/StoreProvider';
import type { Article } from '@/entities/Article';
import { ArticlesViews, ArticleSortField, ArticleType } from '@/entities/Article';
import type { ArticlesPageSchema } from '../types/articlesPageSchema';
import { fetchArticlesList } from '../services/fetchArticlesList/fetchArticlesList';
import { ARTICLE_VIEW_LOCALSTORAGE_KEY } from '@/shared/const/localStorage';
import type { SortOrder } from '@/shared/types/sort';

const articlesListAdapter = createEntityAdapter<Article, string>({
  selectId: (article) => article.id,
});

export const getArticlesList = articlesListAdapter.getSelectors<StateSchema>((state: StateSchema) => {
  return state.articlesPage || articlesListAdapter.getInitialState();
});

const articlesPageSlice = createSlice({
  name: 'articlesPageSlice',
  initialState: articlesListAdapter.getInitialState<ArticlesPageSchema>({
    ids: [],
    entities: {},
    view: ArticlesViews.Small,
    isLoading: false,
    error: undefined,
    page: 1,
    hasMore: true,
    _init: false,
    search: '',
    order: 'asc',
    sort: ArticleSortField.Created,
    limit: 4,
    type: ArticleType.All,
  }),
  reducers: {
    setView: (state, action: PayloadAction<ArticlesViews>) => {
      state.view = action.payload;
      localStorage.setItem(ARTICLE_VIEW_LOCALSTORAGE_KEY, action.payload);
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    setOrder: (state, action: PayloadAction<SortOrder>) => {
      state.order = action.payload;
    },
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    setSort: (state, action: PayloadAction<ArticleSortField>) => {
      state.sort = action.payload;
    },
    setType: (state, action: PayloadAction<ArticleType>) => {
      state.type = action.payload;
    },
    initState: (state) => {
      const view = localStorage.getItem(ARTICLE_VIEW_LOCALSTORAGE_KEY) as ArticlesViews;
      state.view = view;
      state.limit = view === ArticlesViews.Big ? 4 : 9;
      state._init = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticlesList.pending, (state, action) => {
        state.isLoading = true;
        state.error = undefined;

        if (action.meta.arg.replace) {
          articlesListAdapter.removeAll(state);
        }
      })
      .addCase(fetchArticlesList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.hasMore = action.payload.length >= state.limit;

        if (action.meta.arg.replace) {
          articlesListAdapter.setAll(state, action.payload);
        } else {
          articlesListAdapter.addMany(state, action.payload);
        }
      })
      .addCase(fetchArticlesList.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { reducer: articlesPageReducer, actions: articlesPageActions } = articlesPageSlice;
