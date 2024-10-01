import type { Meta, StoryObj } from '@storybook/react'
import { Dropdown } from './Dropdown'
import { Button } from '../../../Button'

const meta: Meta<typeof Dropdown> = {
  title: 'Shared/Dropdown',
  component: Dropdown,
  argTypes: {
    className: { control: 'color' }
  },
  args: {}
}

export default meta
type Story = StoryObj<typeof Dropdown>

export const Primary: Story = {
  args: {
    trigger: <Button>Open</Button>,
    items: [
      {
        content: 'First content'
      },
      {
        content: 'Second content'
      },
      {
        content: 'Third content'
      }
    ]
  }
}
