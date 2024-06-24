import { Country } from 'entities/Country'
import { getProfileData } from './getProfileData'
import type { StateSchema } from 'app/providers/StoreProvider'
import { Currency } from 'entities/Currency'

describe('getProfileData', () => {
  test('should return data', () => {
    const data = {
      first: 'Leanne',
      lastName: 'Graham',
      age: 18,
      currency: Currency.RUB,
      country: Country.Russia,
      city: 'Moscow',
      username: 'admin'
    }

    const state: DeepPartial<StateSchema> = { profile: { data } }
    expect(getProfileData(state as StateSchema)).toEqual(data)
  })
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getProfileData(state as StateSchema)).toEqual(undefined)
  })
})
