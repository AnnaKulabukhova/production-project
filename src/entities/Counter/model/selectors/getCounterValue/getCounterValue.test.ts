import type { StateSchema } from 'app/providers/StoreProvider'
import { getCounterValue } from './getCounterValue'
import type { DeepPartial } from 'shared/types/general'

describe('getCounterValue', () => {
  test('test with only first param', () => {
    const state: DeepPartial<StateSchema> = { counter: { value: 10 } }
    expect(getCounterValue(state as StateSchema)).toEqual(10)
  })
})
