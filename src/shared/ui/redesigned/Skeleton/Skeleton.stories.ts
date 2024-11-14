import type { Meta, StoryObj } from '@storybook/react';
import { Skeleton } from './Skeleton';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

const meta: Meta<typeof Skeleton> = {
  title: 'Shared/Skeleton',
  component: Skeleton,
  argTypes: {
    className: { control: 'color' },
  },
  args: {},
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const PrimaryRedesigned: Story = {
  args: {
    height: 100,
    width: '100%',
  },
  decorators: [NewDesignDecorator],
};
export const DarkRedesigned: Story = {
  args: {
    height: 100,
    width: '100%',
  },
  decorators: [NewDesignDecorator, ThemeDecorator(Theme.Dark)],
};
export const BlueRedesigned: Story = {
  args: {
    height: 100,
    width: '100%',
  },
  decorators: [NewDesignDecorator, ThemeDecorator(Theme.Blue)],
};

export const CircleRedesigned: Story = {
  args: {
    border: '50%',
    height: 100,
    width: 100,
  },
  decorators: [NewDesignDecorator],
};

export const CircleDarkRedesigned: Story = {
  args: {
    border: '50%',
    height: 100,
    width: 100,
  },
  decorators: [NewDesignDecorator, ThemeDecorator(Theme.Dark)],
};

export const CircleBlueRedesigned: Story = {
  args: {
    border: '50%',
    height: 100,
    width: 100,
  },
  decorators: [NewDesignDecorator, ThemeDecorator(Theme.Blue)],
};
