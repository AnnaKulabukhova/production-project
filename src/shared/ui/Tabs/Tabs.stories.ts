import type { Meta, StoryObj } from '@storybook/react'
import { Tabs } from './Tabs'
import { action } from '@storybook/addon-actions'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator'
import { Theme } from '@/shared/const/theme'

const meta: Meta<typeof Tabs> = {
  title: 'Shared/Tabs',
  component: Tabs,
  argTypes: {
    className: { control: 'color' }
  },
  args: {}
}

export default meta
type Story = StoryObj<typeof Tabs>

export const Light: Story = {
  args: {
    tabs: [
      {
        content: 'tab 1',
        value: 'tab 1'
      },
      {
        content: 'tab 2',
        value: 'tab 2'
      },
      {
        content: 'tab 3',
        value: 'tab 3'
      }
    ],
    value: 'tab 2',
    onTabClick: action('onTabClick')
  }
}
export const Dark: Story = {
  args: {
    tabs: [
      {
        content: 'tab 1',
        value: 'tab 1'
      },
      {
        content: 'tab 2',
        value: 'tab 2'
      },
      {
        content: 'tab 3',
        value: 'tab 3'
      }
    ],
    value: 'tab 2',
    onTabClick: action('onTabClick')
  },
  decorators: [ThemeDecorator(Theme.Dark)]
}
export const Blue: Story = {
  args: {
    tabs: [
      {
        content: 'tab 1',
        value: 'tab 1'
      },
      {
        content: 'tab 2',
        value: 'tab 2'
      },
      {
        content: 'tab 3',
        value: 'tab 3'
      }
    ],
    value: 'tab 2',
    onTabClick: action('onTabClick')
  },
  decorators: [ThemeDecorator(Theme.Blue)]
}
