import type { Meta, StoryObj } from '@storybook/react';
import MainPage from './MainPage';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { StoreProviderDecorator } from '@/shared/config/storybook/StoreProviderDecorator';
import { Theme } from '@/shared/const/theme';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

const meta: Meta<typeof MainPage> = {
  title: 'Pages/MainPage',
  component: MainPage,
  argTypes: {
    className: { control: 'color' },
  },
  decorators: [StoreProviderDecorator({})],
};

export default meta;
type Story = StoryObj<typeof MainPage>;

export const Primary: Story = {
};
export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.Dark)],
};
export const Blue: Story = {
  decorators: [ThemeDecorator(Theme.Blue)],
};

export const LightRedesigned: Story = { decorators: [NewDesignDecorator] };

export const DarkRedesigned: Story = {
  decorators: [NewDesignDecorator, ThemeDecorator(Theme.Dark)],
};
export const BlueRedesigned: Story = {
  decorators: [NewDesignDecorator, ThemeDecorator(Theme.Blue)],
};