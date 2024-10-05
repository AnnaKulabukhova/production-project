import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

const meta: Meta<typeof Input> = {
  title: 'Shared/Input',
  component: Input,
  argTypes: {
    className: { control: 'color' },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Primary: Story = {
  args: {
    value: 'name',
    placeholder: 'Enter your name',
  },
};

export const Dark: Story = {
  args: {
    value: 'name',
    placeholder: 'Enter your name',
  },
  decorators: [ThemeDecorator(Theme.Dark)],
};
export const Blue: Story = {
  args: {
    value: 'name',
    placeholder: 'Enter your name',
  },
  decorators: [ThemeDecorator(Theme.Blue)],
};
