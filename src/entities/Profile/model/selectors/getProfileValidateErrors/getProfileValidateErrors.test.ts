import { getProfileValidateErrors } from './getProfileValidateErrors'
import type { StateSchema } from 'app/providers/StoreProvider'
import { ValidateProfileErrors } from '../../types/profile'

describe('getProfileValidateErrors', () => {
  test('should return validate errors', () => {
    const state: DeepPartial<StateSchema> = { profile: { validateErrors: [ValidateProfileErrors.IncorrectAge] } }
    expect(getProfileValidateErrors(state as StateSchema)).toEqual([ValidateProfileErrors.IncorrectAge])
  })
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getProfileValidateErrors(state as StateSchema)).toEqual(undefined)
  })
})
