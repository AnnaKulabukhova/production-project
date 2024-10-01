import { Country } from '@/entities/Country'
import { getProfileForm } from './getProfileForm'
import type { StateSchema } from '@/app/providers/StoreProvider'
import { Currency } from '@/entities/Currency'

describe('getProfileForm', () => {
  test('should return form', () => {
    const data = {
      first: 'Leanne',
      lastName: 'Graham',
      age: 18,
      currency: Currency.RUB,
      country: Country.Russia,
      city: 'Moscow',
      username: 'admin'
    }

    const state: DeepPartial<StateSchema> = { profile: { form: data } }
    expect(getProfileForm(state as StateSchema)).toEqual(data)
  })
  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getProfileForm(state as StateSchema)).toEqual(undefined)
  })
})
