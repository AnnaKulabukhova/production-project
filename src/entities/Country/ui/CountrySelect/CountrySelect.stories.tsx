import type { Meta, StoryObj } from '@storybook/react'
import { CountrySelect } from './CountrySelect'
import { Country } from '@/entities/Country'
import { action } from '@storybook/addon-actions'
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator'

import { PositionDecorator } from '@/shared/config/storybook/PositionDecorator'
import { Theme } from '@/shared/const/theme'

const meta: Meta<typeof CountrySelect> = {
  title: 'Entities/CountrySelect',
  component: CountrySelect,
  argTypes: {
    className: { control: 'color' }
  }
}

export default meta
type Story = StoryObj<typeof CountrySelect>

export const Primary: Story = {
  args: {
    value: Country.Armenia,
    onChange: action('onChange')
  },
  decorators: [PositionDecorator]
}

export const Dark: Story = {
  args: {
    value: Country.Kazakhstan,
    onChange: action('onChange')
  },
  decorators: [PositionDecorator, ThemeDecorator(Theme.Dark)]
}

export const Blue: Story = {
  args: {
    value: Country.Belarus,
    onChange: action('onChange')
  },
  decorators: [PositionDecorator, ThemeDecorator(Theme.Blue)]
}
