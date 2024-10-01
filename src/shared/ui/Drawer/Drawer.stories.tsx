import type { Meta, StoryObj } from '@storybook/react'
import { Drawer } from './Drawer'
import { action } from '@storybook/addon-actions'

const children = (
  <ul>
    <li>Element1</li>
    <li>Element2</li>
    <li>Element3</li>
  </ul>
)
const meta: Meta<typeof Drawer> = {
  title: 'Shared/Drawer',
  component: Drawer,
  argTypes: {
    className: { control: 'color' }
  },
  args: {}
}

export default meta
type Story = StoryObj<typeof Drawer>

export const Open: Story = {
  args: {
    children,
    isOpen: true,
    onClose: action('Close')
  }
}
export const Close: Story = {
  args: {
    children,
    isOpen: false
  }
}
