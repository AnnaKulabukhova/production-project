import type { Meta, StoryObj } from '@storybook/react';
import { CountrySelect } from './CountrySelect';

const meta: Meta<typeof CountrySelect> = {
  title: 'Entities/CountrySelect',
  component: CountrySelect,
  argTypes: {
    className: { control: 'color' },
  },
}

export default meta;
type Story = StoryObj<typeof CountrySelect>;


export const Primary: Story = {
  args: {}
};