import axios from 'axios'
import { addCommentForArticle } from './addCommentForArticle'
import type { Dispatch } from '@reduxjs/toolkit'
import type { StateSchema } from '@/app/providers/StoreProvider'
import type { Comment } from '@/entities/Comment'

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>

const comment: Comment = {
  id: '1',
  text: 'text',
  user: {
    id: '1',
    avatar: '',
    username: 'user'
  }
}

describe('addCommentForArticle', () => {
  let dispatch: Dispatch
  let getState: () => StateSchema
  let extra: { api: typeof mockedAxios }

  beforeEach(() => {
    dispatch = jest.fn()
    getState = jest.fn(() => ({
      user: { authData: { id: '1' } },
      articleDetails: { data: { id: '1' } }
    }) as StateSchema)
    extra = { api: mockedAxios }
  })

  test('success add comment', async () => {
    mockedAxios.post.mockReturnValue(Promise.resolve({ data: comment }))
    const action = addCommentForArticle('text')
    const result = await action(dispatch, getState, extra)

    expect(mockedAxios.post).toHaveBeenCalled()
    expect(result.meta.requestStatus).toBe('fulfilled')
    expect(result.payload).toEqual(comment)
  })

  test('error add comment', async () => {
    mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }))
    const action = addCommentForArticle('text')
    const result = await action(dispatch, getState, { api: mockedAxios })

    expect(mockedAxios.post).toHaveBeenCalled()
    expect(result.meta.requestStatus).toBe('rejected')
    expect(result.payload).toBe('error')
  })
})
