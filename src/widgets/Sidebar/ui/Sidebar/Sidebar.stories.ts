import type { Meta, StoryObj } from '@storybook/react'
import { Sidebar } from '../../ui/Sidebar/Sidebar'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator'
import { StoreProviderDecorator } from '@/shared/config/storybook/StoreProviderDecorator'
import { Theme } from '@/shared/const/theme'

const meta: Meta<typeof Sidebar> = {
  title: 'Widgets/Sidebar/Sidebar',
  component: Sidebar,
  argTypes: {
    className: { control: 'color' }
  }
}

export default meta
type Story = StoryObj<typeof Sidebar>

export const Light: Story = {
  decorators: [StoreProviderDecorator({ user: { authData: {} } })]
}

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.Dark), StoreProviderDecorator({ user: { authData: {} } })]
}
export const BlueNoAuth: Story = {
  decorators: [ThemeDecorator(Theme.Blue), StoreProviderDecorator({ user: undefined })]
}

export const LightNoAuth: Story = {
  decorators: [StoreProviderDecorator({ user: undefined })]
}
