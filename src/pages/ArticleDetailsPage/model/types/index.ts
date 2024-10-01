import type { Reducer } from '@reduxjs/toolkit'
import type { ArticleDetailsCommentSchema } from './ArticleDetailsCommentSchema'
import type { ArticleDetailsPageRecommendationsSchema } from './ArticleDetailsPageRecommendationsSchema'

export interface ArticleDetailsPageSchema {
  comments: ArticleDetailsCommentSchema
  recommendations: ArticleDetailsPageRecommendationsSchema
}

export interface ArticleDetailsPageSchemaForReducers {
  comments: Reducer<ArticleDetailsCommentSchema>
  recommendations: Reducer<ArticleDetailsPageRecommendationsSchema>
}
