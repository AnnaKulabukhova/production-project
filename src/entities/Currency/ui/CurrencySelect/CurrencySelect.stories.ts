import type { Meta, StoryObj } from '@storybook/react'
import { CurrencySelect } from './CurrencySelect'
import { Currency } from '../../model/types/currency'
import { action } from '@storybook/addon-actions'
import { PositionDecorator } from '@/shared/config/storybook/PositionDecorator'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator'
import { Theme } from '@/shared/const/theme'

const meta: Meta<typeof CurrencySelect> = {
  title: 'Entities/CurrencySelect',
  component: CurrencySelect,
  argTypes: {
    className: { control: 'color' }
  }
}

export default meta
type Story = StoryObj<typeof CurrencySelect>

export const Primary: Story = {
  args: {
    value: Currency.EUR,
    onChange: action('onchange')
  },
  decorators: [PositionDecorator]
}
export const Blue: Story = {
  args: {
    value: Currency.RUB,
    onChange: action('onchange')
  },
  decorators: [PositionDecorator, ThemeDecorator(Theme.Blue)]
}
export const Dark: Story = {
  args: {
    value: Currency.USD,
    onChange: action('onchange')
  },
  decorators: [PositionDecorator, ThemeDecorator(Theme.Dark)]
}
