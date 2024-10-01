import type { Meta, StoryObj } from '@storybook/react'
import ProfilePage from './ProfilePage'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator'
import { StoreProviderDecorator } from '@/shared/config/storybook/StoreProviderDecorator'
import { Currency } from '@/entities/Currency'
import { Country } from '@/entities/Country'
import AvatarImg from '@/shared/assets/tests/avatarForStorybook.jpg'
import { Theme } from '@/shared/const/theme'

const data = {
  first: 'Leanne',
  lastName: 'Graham',
  age: 18,
  currency: Currency.RUB,
  country: Country.Russia,
  city: 'Moscow',
  username: 'admin',
  avatar: AvatarImg
}

const meta: Meta<typeof ProfilePage> = {
  title: 'Pages/ProfilePage',
  component: ProfilePage,
  argTypes: {
    className: { control: 'color' }
  },
  decorators: [StoreProviderDecorator({ profile: { form: data } })]
}

export default meta
type Story = StoryObj<typeof ProfilePage>

export const Light: Story = {}

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.Dark)]
}
