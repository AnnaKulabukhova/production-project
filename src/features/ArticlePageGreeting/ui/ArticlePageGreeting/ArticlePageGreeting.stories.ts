import type { Meta, StoryObj } from '@storybook/react';
import { ArticlePageGreeting } from './ArticlePageGreeting';
import { StoreProviderDecorator } from '@/shared/config/storybook/StoreProviderDecorator';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';
import { Theme } from '@/shared/const/theme';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';


const meta: Meta<typeof ArticlePageGreeting> = {
  title: 'Features/ArticlePageGreeting',
  component: ArticlePageGreeting,
  argTypes: {
    className: { control: 'color' },
  },
  args: {},
  decorators: [StoreProviderDecorator({})]
};

export default meta;
type Story = StoryObj<typeof ArticlePageGreeting>;


export const Light: Story = {};

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.Dark)]
};
export const Blue: Story = {
  decorators: [ThemeDecorator(Theme.Blue)]
};

export const LightRedesigned: Story = {
  decorators: [NewDesignDecorator]
};

export const DarkRedesigned: Story = {
  decorators: [NewDesignDecorator, ThemeDecorator(Theme.Dark)]
};
export const BlueRedesigned: Story = {
  decorators: [NewDesignDecorator, ThemeDecorator(Theme.Blue)]
};