import { DeepPartial } from "shared/types/general"
import { getLoginLoading } from "./getLoginLoading"
import { StateSchema } from "app/providers/StoreProvider"
import { LoginSchema } from "../../types/LoginSchema"

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