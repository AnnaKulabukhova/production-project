import type { Meta, StoryObj } from '@storybook/react'
import { AppLink, AppLinkTheme } from './AppLink'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator'
import { Theme } from '@/shared/const/theme'

const meta: Meta<typeof AppLink> = {
  title: 'Shared/AppLink',
  component: AppLink,
  argTypes: {
    className: { control: 'color' }
  },
  args: { to: '/' }
}

export default meta
type Story = StoryObj<typeof AppLink>

export const Primary: Story = {
  args: {
    children: 'text',
    theme: AppLinkTheme.Primary
  }
}

export const Red: Story = {
  args: {
    children: 'text',
    theme: AppLinkTheme.Red
  }

}
export const PrimaryDark: Story = {
  args: {
    children: 'text',
    theme: AppLinkTheme.Primary
  },
  decorators: [ThemeDecorator(Theme.Dark)]
}

export const RedDark: Story = {
  args: {
    children: 'text',
    theme: AppLinkTheme.Red
  },
  decorators: [ThemeDecorator(Theme.Dark)]
}
