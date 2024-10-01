import type { Meta, StoryObj } from '@storybook/react'
import { Navbar } from './Navbar'
import { ThemeDecorator } from '../../shared/config/storybook/ThemeDecorator'
import { StoreProviderDecorator } from '@/shared/config/storybook/StoreProviderDecorator'
import { Theme } from '@/shared/const/theme'

const meta: Meta<typeof Navbar> = {
  title: 'Widgets/Navbar',
  component: Navbar,
  argTypes: {
    className: { control: 'color' }
  }
}

export default meta
type Story = StoryObj<typeof Navbar>

export const Light: Story = {
  decorators: [
    StoreProviderDecorator({
      user: {
        authData:
        {
          username: 'dgg',
          id: '5',
          avatar: 'https://koshka.top/uploads/posts/2021-11/1636826819_12-koshka-top-p-koshki-chernii-kotyara-15.jpg'
        }
      }
    })
  ]
}

export const Dark: Story = {
  decorators: [
    ThemeDecorator(Theme.Dark),
    StoreProviderDecorator({
      user: {
        authData:
        {
          username: 'dgg',
          id: '5',
          avatar: 'https://koshka.top/uploads/posts/2021-11/1636826819_12-koshka-top-p-koshki-chernii-kotyara-15.jpg'
        }
      }
    })
  ]
}

export const AuthNavbar: Story = {
  decorators: [
    StoreProviderDecorator({ user: { authData: undefined } })
  ]
}
