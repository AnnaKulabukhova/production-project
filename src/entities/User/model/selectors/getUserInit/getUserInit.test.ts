import type { StateSchema } from '@/app/providers/StoreProvider'
import { getUserInit } from './getUseInit'

describe('getUserInit.test', () => {
  test('should return init', () => {
    const state: DeepPartial<StateSchema> = {
      user: {
        _init: true
      }
    }
    expect(getUserInit(state as StateSchema)).toEqual(true)
  })
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {
      user: {}
    }
    expect(getUserInit(state as StateSchema)).toEqual(undefined)
  })
})
