import { StateSchema } from "app/providers/StoreProvider"
import { DeepPartial } from "shared/types/general"
import { loginActions, loginReducer } from "./loginSlice"
import { LoginSchema } from "../types/LoginSchema"

describe('loginSlice', () => {
  test('test set username', () => {
    const state: DeepPartial<LoginSchema> = { username: '' }
    expect(loginReducer(state as LoginSchema, loginActions.setUsername('Admin'))).toEqual({ username: 'Admin' })
  })
  test('test set password', () => {
    const state: DeepPartial<LoginSchema> = { password: '' }
    expect(loginReducer(state as LoginSchema, loginActions.setPassword('123112'))).toEqual({ password: '123112' })
  })
  test('should work with empty state', () => {
    expect(loginReducer(undefined, loginActions.setPassword('123112'))).toEqual({ password: '123112', username: '', isLoading: false })
  })
})