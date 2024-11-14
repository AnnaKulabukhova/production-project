import type { Meta, StoryObj } from '@storybook/react';
import { Loader } from './Loader';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

const meta: Meta<typeof Loader> = {
  title: 'Shared/Loader',
  component: Loader,
  argTypes: {
    className: { control: 'color' },
  },
};

export default meta;
type Story = StoryObj<typeof Loader>;

export const Light: Story = {};

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.Dark)],
};
export const LightRedesigned: Story = {
  decorators: [NewDesignDecorator]
};

export const DarkRedesigned: Story = {
  decorators: [NewDesignDecorator, ThemeDecorator(Theme.Dark)],
};
export const BlueRedesigned: Story = {
  decorators: [NewDesignDecorator, ThemeDecorator(Theme.Blue)],
};
