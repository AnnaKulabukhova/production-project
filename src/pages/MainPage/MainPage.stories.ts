import type { Meta, StoryObj } from '@storybook/react'
import MainPage from './MainPage'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator'
import { StoreProviderDecorator } from '@/shared/config/storybook/StoreProviderDecorator'
import { Theme } from '@/shared/const/theme'

const meta: Meta<typeof MainPage> = {
  title: 'Pages/MainPage',
  component: MainPage,
  argTypes: {
    className: { control: 'color' }
  },
  decorators: [StoreProviderDecorator({})]
}

export default meta
type Story = StoryObj<typeof MainPage>

export const Light: Story = {
}

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.Dark)]
}
