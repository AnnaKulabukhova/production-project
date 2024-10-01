import type { Meta, StoryObj } from '@storybook/react'
import { Overlay } from './Overlay'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator'
import { Theme } from '@/shared/const/theme'
import { action } from '@storybook/addon-actions'

const meta: Meta<typeof Overlay> = {
  title: 'Shared/Overlay',
  component: Overlay,
  argTypes: {
    className: { control: 'color' }
  },
  args: {
    onClick: action('onOverlayClick')
  }
}

export default meta
type Story = StoryObj<typeof Overlay>

export const Light: Story = {
}
export const Dark: Story = {
  decorators: ThemeDecorator(Theme.Dark)
}
export const Blue: Story = {
  decorators: ThemeDecorator(Theme.Blue)
}
