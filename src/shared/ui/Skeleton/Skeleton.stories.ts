import type { Meta, StoryObj } from '@storybook/react';
import { Skeleton } from './Skeleton';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider/lib';


const meta: Meta<typeof Skeleton> = {
  title: 'Shared/Skeleton',
  component: Skeleton,
  argTypes: {
    className: { control: 'color' },
  },
  args: {}
};

export default meta;
type Story = StoryObj<typeof Skeleton>;


export const Primary: Story = {
  args: {
    height: 100,
    width: '100%'
  }
};
export const PrimaryDark: Story = {
  args: {
    height: 100,
    width: '100%'
  },
  decorators: [ThemeDecorator(Theme.Dark)]
};
export const PrimaryBlue: Story = {
  args: {
    height: 100,
    width: '100%'
  },
  decorators: [ThemeDecorator(Theme.Blue)]
};

export const Circle: Story = {
  args: {
    border: '50%',
    height: 100,
    width: 100
  }
};

export const CircleDark: Story = {
  args: {
    border: '50%',
    height: 100,
    width: 100
  },
  decorators: [ThemeDecorator(Theme.Dark)]
};

export const CircleBlue: Story = {
  args: {
    border: '50%',
    height: 100,
    width: 100
  },
  decorators: [ThemeDecorator(Theme.Blue)]
};