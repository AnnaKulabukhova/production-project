import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

const meta: Meta<typeof Button> = {
  title: 'Shared/ButtonRedesign',
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
    variant: 'outline',
  },
  decorators: [ThemeDecorator(Theme.Blue)],
};

export const Clear: Story = {
  args: {
    children: 'Text',
    variant: 'clear',
  },
};

export const ClearDark: Story = {
  args: {
    children: 'Text',
    variant: 'clear',
  },
  decorators: [ThemeDecorator(Theme.Dark)],
};

export const Outline: Story = {
  args: {
    children: 'Text',
    variant: 'outline',
  },
};

export const OutlineL: Story = {
  args: {
    children: 'Text',
    size: 'l',
    variant: 'outline',
  },
};
export const OutlineXl: Story = {
  args: {
    children: 'Text',
    size: 'xl',
    variant: 'outline',
  },
};

export const OutlineDark: Story = {
  args: {
    children: 'Text',
    variant: 'outline',
  },
  decorators: [ThemeDecorator(Theme.Dark)],
};

export const Background: Story = {
  args: {
    children: 'Text',
    variant: 'outline',
  },
};
export const BackgroundInverted: Story = {
  args: {
    children: 'Text',
    variant: 'outline',
  },
};
export const SquareSizeM: Story = {
  args: {
    children: '>',
    square: true,
    size: 'm',
    variant: 'outline',
  },
};
export const SquareSizeL: Story = {
  args: {
    children: '>',
    square: true,
    size: 'l',
    variant: 'outline',
  },
};
export const SquareSizeXl: Story = {
  args: {
    children: '>',
    square: true,
    size: 'xl',
    variant: 'outline'
  },
};

export const Disabled: Story = {
  args: {
    children: 'Text',
    variant: 'outline',
    disabled: true,
  },
};
export const FullWightBlue: Story = {
  args: {
    children: 'Text',
    variant: 'outline',
    fullWight: true,
  },
  decorators: [ThemeDecorator(Theme.Blue)],
};
