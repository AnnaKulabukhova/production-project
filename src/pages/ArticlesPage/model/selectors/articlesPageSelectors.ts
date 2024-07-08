import { StateSchema } from "app/providers/StoreProvider";
import { ArticlesViews } from "entities/Article";

export const getArticlesPageLoading = (state: StateSchema) => state.articlesPage?.isLoading || false
export const getArticlesPageError = (state: StateSchema) => state.articlesPage?.error
export const getArticlesPageView = (state: StateSchema) => state.articlesPage?.view || ArticlesViews.Small