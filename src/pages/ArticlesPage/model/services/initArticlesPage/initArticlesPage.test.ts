import { initArticlesPage } from './initArticlesPage'
import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk'

const urlParams = new URLSearchParams({
  order: 'asc',
  sort: 'createAt',
  search: 'test',
  type: 'economics'
})

describe('initArticlesPage', () => {
  test('success', async () => {
    const thunk = new TestAsyncThunk(initArticlesPage, {
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

    await thunk.callThunk(urlParams)

    console.log('dispatch', thunk.dispatch.mock.calls)
    expect(thunk.dispatch).toHaveBeenCalledTimes(8)
  })

  test('initArticlesPage not called', async () => {
    const thunk = new TestAsyncThunk(initArticlesPage, {
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
    await thunk.callThunk(urlParams)

    expect(thunk.dispatch).toHaveBeenCalledTimes(2)
  })
})
