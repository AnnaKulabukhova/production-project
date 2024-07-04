import { fetchCommentsByArticleId } from '../../services/fetchCommentsByArticleId/fetchCommentsByArticleId'
import { articleDetailsCommentsReducer } from './articleDetailsCommentSlice'
import type { ArticleDetailsCommentSchema } from '../../types/ArticleDetailsCommentSchema'

const articleDetailsComment: ArticleDetailsCommentSchema = {
  ids: ['1', '2'],
  entities: {
    1: {
      id: '1',
      text: 'abc',
      user: {
        id: '1',
        username: 'admin',
        avatar: 'avatar'
      }
    },
    2: {
      id: '2',
      text: 'abc',
      user: {
        id: '1',
        username: 'admin',
        avatar: 'avatar'
      }
    }
  },
  isLoading: false,
  error: undefined
}

const state: ArticleDetailsCommentSchema = {
  ids: [],
  entities: {},
  isLoading: false,
  error: undefined
}

describe('articleDetailsCommentSlice', () => {
  test('test list of comments pending', () => {
    const state: DeepPartial<ArticleDetailsCommentSchema> = {
      isLoading: false
    }
    expect(articleDetailsCommentsReducer(
      state as ArticleDetailsCommentSchema,
      fetchCommentsByArticleId.pending('', '')
    )).toEqual({ isLoading: true })
  })

  test('test  get list of comments', () => {
    expect(articleDetailsCommentsReducer(
      state,
      fetchCommentsByArticleId.fulfilled([
        {
          id: '1',
          text: 'abc',
          user: {
            id: '1',
            username: 'admin',
            avatar: 'avatar'
          }
        },
        {
          id: '2',
          text: 'abc',
          user: {
            id: '1',
            username: 'admin',
            avatar: 'avatar'
          }
        }
      ], '', '')
    )).toEqual(articleDetailsComment)
  })
})
