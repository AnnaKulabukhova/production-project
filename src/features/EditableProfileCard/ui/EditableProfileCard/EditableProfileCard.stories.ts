import type { Meta, StoryObj } from '@storybook/react'
import { EditableProfileCard } from './EditableProfileCard'
import { StoreProviderDecorator } from '@/shared/config/storybook/StoreProviderDecorator'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator'
import { Theme } from '@/shared/const/theme'

const meta: Meta<typeof EditableProfileCard> = {
  title: 'Features/EditableProfileCard/EditableProfileCard',
  component: EditableProfileCard,
  argTypes: {
    className: { control: 'color' }
  },
  args: {},
  decorators: [StoreProviderDecorator({})]
}

export default meta
type Story = StoryObj<typeof EditableProfileCard>

export const Light: Story = {}
export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.Dark)]
}
export const Blue: Story = {
  decorators: [ThemeDecorator(Theme.Blue)]
}
