import { screen } from '@testing-library/react'
import { componentRender } from '@/shared/lib/tests/componentRender/componentRender'
import { EditableProfileCard } from './EditableProfileCard'
import type { Profile } from '@/entities/Profile'
import { Country } from '@/entities/Country'
import { Currency } from '@/entities/Currency'
import { profileReducer } from '../../model/slice/profileSlice'
import userEvent from '@testing-library/user-event'
import { $api } from '@/shared/api/api'

const profile: Profile = {
  first: 'admin',
  age: 19,
  avatar: 'avatar',
  city: 'Moscow',
  country: Country.Armenia,
  currency: Currency.EUR,
  id: '1',
  lastName: 'admin',
  username: 'admin1'
}
// Замокать ResizeObserver - API браузера, который отслеживает изменения размеров элементов
beforeAll(() => {
  global.ResizeObserver = class {
    observe() { }
    unobserve() { }
    disconnect() { }
  }
})

const options = {
  initialState: {
    profile: {
      data: profile,
      form: profile,
      readonly: true
    },
    user: {
      authData: {
        id: '1',
        username: 'admin1'
      }
    }
  },
  asyncReducers: {
    profile: profileReducer
  }
}

describe('EditableProfileCard', () => {
  test('change readonly', async () => {
    componentRender(<EditableProfileCard id={'1'} />, options)
    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'))
    expect(screen.getByTestId('EditableProfileCardHeader.CancelButton')).toBeInTheDocument()
  })

  test('when canceled, the values are reset to zero', async () => {
    componentRender(<EditableProfileCard id={'1'} />, options)
    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'))
    await userEvent.clear(screen.getByTestId('ProfileCard.FirstName'))
    await userEvent.clear(screen.getByTestId('ProfileCard.Lastname'))

    await userEvent.type(screen.getByTestId('ProfileCard.FirstName'), 'user')
    await userEvent.type(screen.getByTestId('ProfileCard.Lastname'), 'user')

    expect(screen.getByTestId('ProfileCard.FirstName')).toHaveValue('user')
    expect(screen.getByTestId('ProfileCard.Lastname')).toHaveValue('user')

    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.CancelButton'))

    expect(screen.getByTestId('ProfileCard.FirstName')).toHaveValue('admin')
    expect(screen.getByTestId('ProfileCard.Lastname')).toHaveValue('admin')
  })

  test('should be a mistake', async () => {
    componentRender(<EditableProfileCard id={'1'} />, options)
    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'))
    await userEvent.clear(screen.getByTestId('ProfileCard.FirstName'))
    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.SaveButton'))
    expect(screen.getByTestId('EditableProfileCard.Error.Paragraph')).toBeInTheDocument()
  })
  test('save result', async () => {
    const mockPutRequired = jest.spyOn($api, 'put')
    componentRender(<EditableProfileCard id={'1'} />, options)
    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.EditButton'))
    await userEvent.clear(screen.getByTestId('ProfileCard.FirstName'))
    await userEvent.type(screen.getByTestId('ProfileCard.FirstName'), 'user')
    await userEvent.click(screen.getByTestId('EditableProfileCardHeader.SaveButton'))
    expect(mockPutRequired).toHaveBeenCalled()
  })
})
