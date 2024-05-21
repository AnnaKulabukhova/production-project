import type { Meta, StoryObj } from '@storybook/react';
import { Button, ThemeButton } from './Button';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';

const meta: Meta<typeof Button> = {
  title: 'Shared/Button',
  component: Button,
  argTypes: {
    className: { control: 'color' },
  },
}

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: 'Text'
  },

};
export const Clear: Story = {
  args: {
    children: 'Text',
    theme: ThemeButton.Clear
  },

};
export const Outline: Story = {
  args: {
    children: 'Text',
    theme: ThemeButton.Outline
  },

};
export const OutlineDark: Story = {
  args: {
    children: 'Text',
    theme: ThemeButton.Outline
  },
  decorators: [ThemeDecorator(Theme.Dark)]
};