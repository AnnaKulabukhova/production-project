import type { Meta, StoryObj } from '@storybook/react'
import { PageLoader } from './PageLoader'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator'
import { Theme } from '@/shared/const/theme'

const meta: Meta<typeof PageLoader> = {
  title: 'Widgets/PageLoader',
  component: PageLoader,
  argTypes: {
    className: { control: 'color' }
  }

}

export default meta
type Story = StoryObj<typeof PageLoader>

export const Light: Story = {}

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.Dark)]
}
