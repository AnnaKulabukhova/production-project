import type { Meta, StoryObj } from '@storybook/react'
import { StarRating } from './StarRating'

const meta: Meta<typeof StarRating> = {
  title: 'Shared/StarRating',
  component: StarRating,
  argTypes: {
    className: { control: 'color' },
    selectedStars: { control: { type: 'number', min: 0, max: 5 } }
  },
  args: {
    selectedStars: 0
  }
}

export default meta
type Story = StoryObj<typeof StarRating>

export const notSelected: Story = {
  args: {
    selectedStars: 0
  }
}

export const Selected: Story = {
  args: {
    selectedStars: 3
  }
}
export const Small: Story = {
  args: {
    selectedStars: 3,
    size: 15
  }
}
export const Big: Story = {
  args: {
    selectedStars: 3,
    size: 50
  }
}
