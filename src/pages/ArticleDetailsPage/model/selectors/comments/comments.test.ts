import type { StateSchema } from '@/app/providers/StoreProvider'
import { getArticleDetailsCommentError, getArticleDetailsCommentIsLoading } from './comments'

describe('comments', () => {
  test('should return loading', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetailsPage: {
        comments: {
          isLoading: true
        }
      }
    }
    expect(getArticleDetailsCommentIsLoading(state as StateSchema)).toEqual(true)
  })

  test('should work with empty state loading', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getArticleDetailsCommentIsLoading(state as StateSchema)).toEqual(undefined)
  })
  test('should return error', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetailsPage: {
        comments: {
          error: 'error'
        }
      }
    }
    expect(getArticleDetailsCommentError(state as StateSchema)).toEqual('error')
  })

  test('should work with empty state loading', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getArticleDetailsCommentError(state as StateSchema)).toEqual(undefined)
  })
})
