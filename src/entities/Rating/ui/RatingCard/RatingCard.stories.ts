import type { Meta, StoryObj } from '@storybook/react'
import { RatingCard } from './RatingCard'

const meta: Meta<typeof RatingCard> = {
  title: 'Entities/RatingCard',
  component: RatingCard,
  argTypes: {
    className: { control: 'color' }
  },
  args: {}
}

export default meta
type Story = StoryObj<typeof RatingCard>

export const WithRate: Story = {
  args: {
    rate: 2
  }
}

export const WithoutRate: Story = {
  args: {
    title: 'Review'
  }
}
