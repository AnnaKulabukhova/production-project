import type { Meta, StoryObj } from '@storybook/react'
import { ForbiddenPage } from './ForbiddenPage'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator'
import { StoreProviderDecorator } from '@/shared/config/storybook/StoreProviderDecorator'
import { Theme } from '@/shared/const/theme'

const meta: Meta<typeof ForbiddenPage> = {
  title: 'Pages/ForbiddenPage',
  component: ForbiddenPage,
  argTypes: {
    className: { control: 'color' }
  },
  decorators: [StoreProviderDecorator({})]
}

export default meta
type Story = StoryObj<typeof ForbiddenPage>

export const Light: Story = {
}

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.Dark)]
}
