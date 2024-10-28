import type { Meta, StoryObj } from '@storybook/react';
import { AppLink } from './AppLink';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

const meta: Meta<typeof AppLink> = {
  title: 'Shared/AppLinkRedesign',
  component: AppLink,
  argTypes: {
    className: { control: 'color' },
  },
  args: { to: '/' },
};

export default meta;
type Story = StoryObj<typeof AppLink>;

export const Primary: Story = {
  args: {
    children: 'text',
    variant: 'primary',
  },
};

export const Red: Story = {
  args: {
    children: 'text',
    variant: 'red',
  },
};
export const PrimaryDark: Story = {
  args: {
    children: 'text',
    variant: 'primary',
  },
  decorators: [ThemeDecorator(Theme.Dark)],
};

export const RedDark: Story = {
  args: {
    children: 'text',
    variant: 'red',
  },
  decorators: [ThemeDecorator(Theme.Dark)],
};
