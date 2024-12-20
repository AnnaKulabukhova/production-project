import type { StateSchema } from '@/app/providers/StoreProvider';
import { ArticleSortField, ArticlesViews, ArticleType } from '@/entities/Article';

export const getArticlesPageLoading = (state: StateSchema) => state.articlesPage?.isLoading ?? false;
export const getArticlesPageError = (state: StateSchema) => state.articlesPage?.error;
export const getArticlesPageView = (state: StateSchema) => state.articlesPage?.view ?? ArticlesViews.Small;
export const getArticlesPageNum = (state: StateSchema) => state.articlesPage?.page ?? 1;
export const getArticlesPageLimit = (state: StateSchema) => state.articlesPage?.limit ?? 9;
export const getArticlesPageHasMore = (state: StateSchema) => state.articlesPage?.hasMore;
export const getArticlesPageInit = (state: StateSchema) => state.articlesPage?._init;
export const getArticlesPageOrder = (state: StateSchema) => state.articlesPage?.order ?? 'asc';
export const getArticlesPageSearch = (state: StateSchema) => state.articlesPage?.search ?? '';
export const getArticlesPageSort = (state: StateSchema) => state.articlesPage?.sort ?? ArticleSortField.Created;
export const getArticlesPageType = (state: StateSchema) => state.articlesPage?.type ?? ArticleType.All;

