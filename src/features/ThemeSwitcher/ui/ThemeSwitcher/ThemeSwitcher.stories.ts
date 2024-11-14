import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { ThemeSwitcher } from './ThemeSwitcher';
import { StoreProviderDecorator } from '@/shared/config/storybook/StoreProviderDecorator';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

const meta: Meta<typeof ThemeSwitcher> = {
  title: 'Features/ThemeSwitcher',
  component: ThemeSwitcher,
  argTypes: {
    className: { control: 'color' },
  },
  decorators: [StoreProviderDecorator({})]
};

export default meta;
type Story = StoryObj<typeof ThemeSwitcher>;

export const Light: Story = {};

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.Dark)],
};
export const Blue: Story = {
  decorators: [ThemeDecorator(Theme.Blue)],
};
export const LightRedesigned: Story = {
  decorators: [NewDesignDecorator,],
};

export const DarkRedesigned: Story = {
  decorators: [NewDesignDecorator, ThemeDecorator(Theme.Dark)],
};
export const BlueRedesigned: Story = {
  decorators: [NewDesignDecorator, ThemeDecorator(Theme.Blue)],
};
