import type { Meta, StoryObj } from '@storybook/react';
import { Text } from './Text';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

const meta: Meta<typeof Text> = {
  title: 'Shared/TextRedesign',
  component: Text,
  argTypes: {
    className: { control: 'color' },
  },
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Primary: Story = {
  args: {
    title: 'Title',
    text: ' Text Text Text Text Text ',
  },
};
export const OnlyTitle: Story = {
  args: {
    title: 'Title',
  },
};
export const OnlyText: Story = {
  args: {
    text: ' Text Text Text Text Text ',
  },
};
export const Error: Story = {
  args: {
    title: 'Title',
    text: ' Text Text Text Text Text ',
    variant: 'error',
  },
};

export const PrimaryDark: Story = {
  args: {
    title: 'Title',
    text: ' Text Text Text Text Text ',
  },
  decorators: [ThemeDecorator(Theme.Dark)],
};

export const OnlyTitleDark: Story = {
  args: {
    title: 'Title',
  },
  decorators: [ThemeDecorator(Theme.Dark)],
};

export const OnlyTextDark: Story = {
  args: {
    text: ' Text Text Text Text Text ',
  },
  decorators: [ThemeDecorator(Theme.Dark)],
};

export const SizeS: Story = {
  args: {
    title: 'Title',
    text: ' Text Text Text Text Text ',
    size: 's',
  },
};
export const SizeM: Story = {
  args: {
    title: 'Title',
    text: ' Text Text Text Text Text ',
    size: 'm',
  },
};
export const SizeL: Story = {
  args: {
    title: 'Title',
    text: ' Text Text Text Text Text ',
    size: 'l',
  },
};
