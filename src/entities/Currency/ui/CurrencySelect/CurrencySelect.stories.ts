import type { Meta, StoryObj } from '@storybook/react';
import { CurrencySelect } from './CurrencySelect';

const meta: Meta<typeof CurrencySelect> = {
  title: 'Entities/CurrencySelect',
  component: CurrencySelect,
  argTypes: {
    className: { control: 'color' },
  },
}

export default meta;
type Story = StoryObj<typeof CurrencySelect>;


export const Primary: Story = {
  args: {}
};