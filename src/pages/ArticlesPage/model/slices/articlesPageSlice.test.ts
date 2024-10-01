import type { ArticlesPageSchema } from '../types/articlesPageSchema'
import type { Article } from '@/entities/Article'
import { ArticleSortField, ArticlesViews, ArticleType } from '@/entities/Article'
import { articlesPageActions, articlesPageReducer } from './articlesPageSlice'
import { fetchArticlesList } from '../services/fetchArticlesList/fetchArticlesList'

describe('articlesPageSlice', () => {
  test('test set views', () => {
    const state: DeepPartial<ArticlesPageSchema> = { view: ArticlesViews.Small }
    expect(articlesPageReducer(state as ArticlesPageSchema, articlesPageActions.setView(ArticlesViews.Big))).toEqual({ view: ArticlesViews.Big })
  })

  test('test set  number page', () => {
    const state: DeepPartial<ArticlesPageSchema> = { page: 2 }
    expect(articlesPageReducer(state as ArticlesPageSchema, articlesPageActions.setPage(5))).toEqual({ page: 5 })
  })
  test('test set  number init', () => {
    const state: DeepPartial<ArticlesPageSchema> = {
      _init: true,
      view: ArticlesViews.Big
    }
    expect(articlesPageReducer(state as ArticlesPageSchema, articlesPageActions.initState())).toEqual({
      _init: true,
      view: ArticlesViews.Big,
      limit: 4
    })
  })
  test('test set  number order', () => {
    const state: DeepPartial<ArticlesPageSchema> = { order: 'asc' }
    expect(articlesPageReducer(state as ArticlesPageSchema, articlesPageActions.setOrder('desc'))).toEqual({ order: 'desc' })
  })
  test('test set  number search', () => {
    const state: DeepPartial<ArticlesPageSchema> = { search: 'rrr' }
    expect(articlesPageReducer(state as ArticlesPageSchema, articlesPageActions.setSearch('aaa'))).toEqual({ search: 'aaa' })
  })
  test('test set  number sort', () => {
    const state: DeepPartial<ArticlesPageSchema> = { sort: ArticleSortField.Created }
    expect(articlesPageReducer(state as ArticlesPageSchema, articlesPageActions.setSort(ArticleSortField.Views))).toEqual({ sort: ArticleSortField.Views })
  })
  test('test set  number type', () => {
    const state: DeepPartial<ArticlesPageSchema> = { type: ArticleType.Economics }
    expect(articlesPageReducer(state as ArticlesPageSchema, articlesPageActions.setType(ArticleType.IT))).toEqual({ type: ArticleType.IT })
  })

  test('test  loading articles service pending', () => {
    const state: DeepPartial<ArticlesPageSchema> = {
      isLoading: false,
      error: 'error'
    }
    expect(articlesPageReducer(
      state as ArticlesPageSchema,
      fetchArticlesList.pending('', { replace: true })
    )).toEqual({
      isLoading: true,
      error: undefined,
      ids: [],
      entities: {}
    })
  })
  test('test  loading articles service fullfield', () => {
    const state: DeepPartial<ArticlesPageSchema> = {
      isLoading: false
    }

    const articles: Article[] = [
      {
        blocks: [],
        createdAt: '',
        id: '1',
        img: '',
        subtitle: '',
        title: 'article1',
        type: [],
        views: 5,
        user: { id: '1', username: 'user' }
      },
      {
        blocks: [],
        createdAt: '',
        id: '2',
        img: '',
        subtitle: '',
        title: 'article2',
        type: [],
        views: 5,
        user: { id: '2', username: 'admin' }
      }
    ]
    expect(articlesPageReducer(
      state as ArticlesPageSchema,
      fetchArticlesList.fulfilled(articles, '', { replace: true })
    )).toEqual({
      isLoading: false,
      hasMore: false,
      ids: ['1', '2'],
      entities: {
        1: {
          blocks: [],
          createdAt: '',
          id: '1',
          img: '',
          subtitle: '',
          title: 'article1',
          type: [],
          views: 5,
          user: { id: '1', username: 'user' }
        },
        2: {
          blocks: [],
          createdAt: '',
          id: '2',
          img: '',
          subtitle: '',
          title: 'article2',
          type: [],
          views: 5,
          user: { id: '2', username: 'admin' }
        }
      }
    })
  })
})
