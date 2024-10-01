import type { StateSchema } from '@/app/providers/StoreProvider'

export const getArticleDetailsCommentError = (state: StateSchema) => state.articleDetailsPage?.comments.error
export const getArticleDetailsCommentIsLoading = (state: StateSchema) => state.articleDetailsPage?.comments.isLoading
