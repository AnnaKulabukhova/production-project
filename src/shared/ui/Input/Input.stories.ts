import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

const meta: Meta<typeof Input> = {
  title: 'Shared/Input',
  component: Input,
  argTypes: {
    className: { control: 'color' },
  },
}

export default meta;
type Story = StoryObj<typeof Input>;

export const Primary: Story = {
  args: {
    value: 'name',
    placeholder: 'Enter your name'
  },
};
