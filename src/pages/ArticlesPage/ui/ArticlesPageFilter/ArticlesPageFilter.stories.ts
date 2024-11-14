import type { Meta, StoryObj } from '@storybook/react';
import { ArticlesPageFilter } from './ArticlesPageFilter';
import { StoreProviderDecorator } from '@/shared/config/storybook/StoreProviderDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

const meta: Meta<typeof ArticlesPageFilter> = {
  title: 'Pages/ArticlesPage/ArticlesPageFilter',
  component: ArticlesPageFilter,
  argTypes: {
    className: { control: 'color' },
  },
  args: {},
  decorators: [StoreProviderDecorator({})],
};

export default meta;
type Story = StoryObj<typeof ArticlesPageFilter>;

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