import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk'
import { initArticlesPage } from './initArticlesPage'
import type { AsyncThunkAction } from '@reduxjs/toolkit'

jest.mock('../fetchArticlesList/fetchArticlesList')
type ActionCreatorType<Return, Arg, RejectedValue> = (arg: Arg) => AsyncThunkAction<Return, Arg, { rejectValue: RejectedValue }>

describe('initArticlesPage', () => {
  test('success', async () => {
    const thunk = new TestAsyncThunk(initArticlesPage as ActionCreatorType<void, void, string>, {
      articlesPage: {
        entities: {},
        hasMore: true,
        ids: [],
        isLoading: false,
        page: 2,
        limit: 5,
        _init: false
      }
    })
    await thunk.callThunk()

    expect(thunk.dispatch).toHaveBeenCalledTimes(4)
  })

  test('initArticlesPage not called', async () => {
    const thunk = new TestAsyncThunk(initArticlesPage as ActionCreatorType<void, void, string>, {
      articlesPage: {
        entities: {},
        hasMore: false,
        ids: [],
        isLoading: false,
        page: 2,
        limit: 5,
        _init: true
      }
    })
    await thunk.callThunk()

    expect(thunk.dispatch).toHaveBeenCalledTimes(2)
  })
})
