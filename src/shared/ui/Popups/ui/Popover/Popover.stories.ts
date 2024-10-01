import type { Meta, StoryObj } from '@storybook/react'
import { Popover } from './Popover'

const meta: Meta<typeof Popover> = {
  title: 'Shared/Popover',
  component: Popover,
  argTypes: {
    className: { control: 'color' }
  },
  args: {}
}

export default meta
type Story = StoryObj<typeof Popover>

export const Primary: Story = {
  args: {
  }
}
