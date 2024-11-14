import type { Meta, StoryObj } from '@storybook/react';
import AdminPanelPage from './AdminPanelPage';
import { StoreProviderDecorator } from '@/shared/config/storybook/StoreProviderDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

const meta: Meta<typeof AdminPanelPage> = {
  title: 'Pages/AdminPanelPage',
  component: AdminPanelPage,
  argTypes: {
    className: { control: 'color' },
  },
  args: {},
  decorators: [StoreProviderDecorator({})],
};

export default meta;
type Story = StoryObj<typeof AdminPanelPage>;

export const Primary: Story = {
  args: {},
};
export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.Dark)],
};
export const Blue: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.Blue)],
};

export const LightRedesigned: Story = { decorators: [NewDesignDecorator] };

export const DarkRedesigned: Story = {
  decorators: [NewDesignDecorator, ThemeDecorator(Theme.Dark)],
};
export const BlueRedesigned: Story = {
  decorators: [NewDesignDecorator, ThemeDecorator(Theme.Blue)],
};
