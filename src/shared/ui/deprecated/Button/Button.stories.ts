import type { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonSize, ButtonTheme } from './Button';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

const meta: Meta<typeof Button> = {
  title: 'Shared/Button',
  component: Button,
  argTypes: {
    className: { control: 'color' },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const PrimaryBlue: Story = {
  args: {
    children: 'Text',
    theme: ButtonTheme.Primary,
  },
  decorators: [ThemeDecorator(Theme.Blue)],
};

export const Clear: Story = {
  args: {
    children: 'Text',
    theme: ButtonTheme.Clear,
  },
};

export const ClearDark: Story = {
  args: {
    children: 'Text',
    theme: ButtonTheme.Clear,
  },
  decorators: [ThemeDecorator(Theme.Dark)],
};

export const Outline: Story = {
  args: {
    children: 'Text',
    theme: ButtonTheme.Outline,
  },
};

export const OutlineL: Story = {
  args: {
    children: 'Text',
    size: ButtonSize.L,
    theme: ButtonTheme.Outline,
  },
};
export const OutlineXl: Story = {
  args: {
    children: 'Text',
    size: ButtonSize.Xl,
    theme: ButtonTheme.Outline,
  },
};

export const OutlineDark: Story = {
  args: {
    children: 'Text',
    theme: ButtonTheme.Outline,
  },
  decorators: [ThemeDecorator(Theme.Dark)],
};

export const Background: Story = {
  args: {
    children: 'Text',
    theme: ButtonTheme.Background,
  },
};
export const BackgroundInverted: Story = {
  args: {
    children: 'Text',
    theme: ButtonTheme.BackgroundInverted,
  },
};
export const SquareSizeM: Story = {
  args: {
    children: '>',
    square: true,
    size: ButtonSize.M,
    theme: ButtonTheme.BackgroundInverted,
  },
};
export const SquareSizeL: Story = {
  args: {
    children: '>',
    square: true,
    size: ButtonSize.L,
    theme: ButtonTheme.BackgroundInverted,
  },
};
export const SquareSizeXl: Story = {
  args: {
    children: '>',
    square: true,
    size: ButtonSize.Xl,
    theme: ButtonTheme.BackgroundInverted,
  },
};

export const Disabled: Story = {
  args: {
    children: 'Text',
    theme: ButtonTheme.Primary,
    disabled: true,
  },
};
export const FullWightBlue: Story = {
  args: {
    children: 'Text',
    theme: ButtonTheme.Primary,
    fullWight: true,
  },
  decorators: [ThemeDecorator(Theme.Blue)],
};
