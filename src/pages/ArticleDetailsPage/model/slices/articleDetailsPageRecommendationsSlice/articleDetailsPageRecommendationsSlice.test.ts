import type { Article } from '@/entities/Article'
import { fetchArticleRecommendations } from '../../services/fetchArticleRecomendations/fetchArticleRecomendations'
import { articleDetailsPageRecommendationsReducer } from './articleDetailsPageRecommendationsSlice'
import type { ArticleDetailsPageRecommendationsSchema } from '../../types/ArticleDetailsPageRecommendationsSchema'

const recommendationArticles: ArticleDetailsPageRecommendationsSchema = {
  entities: {
    1: {
      views: 5,
      blocks: [],
      createdAt: '',
      id: '1',
      img: '',
      subtitle: 'subtitle 1',
      title: 'title 1',
      type: [],
      user: { id: '1', username: 'user' }
    },
    2: {
      views: 5,
      blocks: [],
      createdAt: '',
      id: '2',
      img: '',
      subtitle: 'subtitle 2',
      title: 'title 2',
      type: [],
      user: { id: '21', username: 'user' }
    }
  },
  ids: ['1', '2']
}

const articles: Article[] = [
  {
    views: 5,
    blocks: [],
    createdAt: '',
    id: '1',
    img: '',
    subtitle: 'subtitle 1',
    title: 'title 1',
    type: [],
    user: { id: '1', username: 'user' }
  },
  {
    views: 5,
    blocks: [],
    createdAt: '',
    id: '2',
    img: '',
    subtitle: 'subtitle 2',
    title: 'title 2',
    type: [],
    user: { id: '21', username: 'user' }
  }
]

describe('articleDetailsPageRecommendationsSlice.test', () => {
  test('pending recommendation articles', () => {
    const state: DeepPartial<ArticleDetailsPageRecommendationsSchema> = {
      isLoading: false
    }
    expect(articleDetailsPageRecommendationsReducer(state as ArticleDetailsPageRecommendationsSchema, fetchArticleRecommendations.pending(''))).toEqual({ isLoading: true })
  })

  test('fulfilled recommendation articles', () => {
    const state: DeepPartial<ArticleDetailsPageRecommendationsSchema> = {
      isLoading: false,
      entities: {},
      ids: []
    }
    expect(articleDetailsPageRecommendationsReducer(state as ArticleDetailsPageRecommendationsSchema, fetchArticleRecommendations.fulfilled(articles, ''))).toEqual({ ...recommendationArticles, isLoading: false })
  })
})
