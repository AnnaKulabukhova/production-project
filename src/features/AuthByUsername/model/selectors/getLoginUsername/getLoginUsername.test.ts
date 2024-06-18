import { DeepPartial } from "shared/types/general"
import { getLoginUsername } from "./getLoginUsername"
import { StateSchema } from "app/providers/StoreProvider"

describe('getLoginUsername', () => {
  test('should return username', () => {
    const state: DeepPartial<StateSchema> = { loginForm: { password: '', username: 'admin', isLoading: false } }
    expect(getLoginUsername(state as StateSchema)).toEqual('admin')
  })
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getLoginUsername(state as StateSchema)).toEqual('')
  })
})