import type { DeepPartial } from 'shared/types/general'
import { getLoginLoading } from './getLoginLoading'
import type { StateSchema } from 'app/providers/StoreProvider'

describe('getLoginLoading', () => {
  test('should return true', () => {
    const state: DeepPartial<StateSchema> = { loginForm: { password: '', username: '', isLoading: true } }
    expect(getLoginLoading(state as StateSchema)).toEqual(true)
  })
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getLoginLoading(state as StateSchema)).toEqual(false)
  })
})
