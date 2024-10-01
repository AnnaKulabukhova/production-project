import { combineReducers } from '@reduxjs/toolkit'
import { articleDetailsCommentsReducer } from './articleDetailsCommentSlice/articleDetailsCommentSlice'
import type { ArticleDetailsPageSchemaForReducers } from '../types'
import { articleDetailsPageRecommendationsReducer } from './articleDetailsPageRecommendationsSlice/articleDetailsPageRecommendationsSlice'

export const articleDetailsPageReducer = combineReducers<ArticleDetailsPageSchemaForReducers>({
  comments: articleDetailsCommentsReducer,
  recommendations: articleDetailsPageRecommendationsReducer
})
