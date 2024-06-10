import type { Meta, StoryObj } from '@storybook/react';
import { Text, TextTheme } from './Text';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';

const meta: Meta<typeof Text> = {
  title: 'Shared/Text',
  component: Text,
  argTypes: {
    className: { control: 'color' },
  },
}

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
    theme: TextTheme.Error
  },
};


export const PrimaryDark: Story = {
  args: {
    title: 'Title',
    text: ' Text Text Text Text Text ',
  },
  decorators: [ThemeDecorator(Theme.Dark)]
};

export const OnlyTitleDark: Story = {
  args: {
    title: 'Title',
  },
  decorators: [ThemeDecorator(Theme.Dark)]
};

export const OnlyTextDark: Story = {
  args: {
    text: ' Text Text Text Text Text ',
  },
  decorators: [ThemeDecorator(Theme.Dark)]

};