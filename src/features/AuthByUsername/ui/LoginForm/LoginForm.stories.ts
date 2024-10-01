import type { Meta, StoryObj } from '@storybook/react'
import LoginForm from './LoginForm'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator'
import { StoreProviderDecorator } from '@/shared/config/storybook/StoreProviderDecorator'
import { Theme } from '@/shared/const/theme'

const meta: Meta<typeof LoginForm> = {
  title: 'Features/LoginForm',
  component: LoginForm,
  argTypes: {
    className: { control: 'color' }
  }
}

export default meta
type Story = StoryObj<typeof LoginForm>

export const Light: Story = {
  decorators: [StoreProviderDecorator({ loginForm: { username: 'admin', password: '123' } })]
}

export const Dark: Story = {
  decorators: [
    ThemeDecorator(Theme.Dark),
    StoreProviderDecorator({ loginForm: { username: 'admin', password: '123' } })]
}

export const WithError: Story = {
  decorators: [StoreProviderDecorator({ loginForm: { username: 'admin', password: '123', error: 'Error!' } })]
}
export const Loading: Story = {
  decorators: [StoreProviderDecorator({ loginForm: { isLoading: true } })]
}
