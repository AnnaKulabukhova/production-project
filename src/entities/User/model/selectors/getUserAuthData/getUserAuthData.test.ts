import type { StateSchema } from 'app/providers/StoreProvider'
import { getUserAuthData } from './getUserAuthData'

describe('getUserAuthData.test', () => {
  test('success return data', () => {
    const state: DeepPartial<StateSchema> = {
      user: {
        authData: {
          id: '1',
          avatar: '1',
          username: 'admin'
        }
      }
    }
    expect(getUserAuthData(state as StateSchema)).toEqual({
      id: '1',
      avatar: '1',
      username: 'admin'
    })
  })
  test('should work with empty authData', () => {
    const state: DeepPartial<StateSchema> = {
      user: {
        authData: {}
      }
    }
    expect(getUserAuthData(state as StateSchema)).toEqual({})
  })
})
