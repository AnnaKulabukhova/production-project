import type { Meta, StoryObj } from '@storybook/react';
import { ArticleType } from '@/entities/Article/model/consts/articleConsts';
import { action } from '@storybook/addon-actions';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { ArticlesTypeTabs } from './ArticlesTypeTabs';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

const meta: Meta<typeof ArticlesTypeTabs> = {
  title: 'Features/Article/ArticlesTypeTabs',
  component: ArticlesTypeTabs,
  argTypes: {
    className: { control: 'color' },
  },
  args: {},
};

export default meta;
type Story = StoryObj<typeof ArticlesTypeTabs>;

export const Primary: Story = {
  args: {
    value: ArticleType.Economics,
    onChangeType: action('onChangeType'),
  },
};
export const Dark: Story = {
  args: {
    value: ArticleType.Science,
    onChangeType: action('onChangeType'),
  },
  decorators: [ThemeDecorator(Theme.Dark)],
};
export const Blue: Story = {
  args: {
    value: ArticleType.All,
    onChangeType: action('onChangeType'),
  },
  decorators: [ThemeDecorator(Theme.Blue)],
};
export const PrimaryRedesigned: Story = {
  args: {
    value: ArticleType.Economics,
    onChangeType: action('onChangeType'),
  },
  decorators: [NewDesignDecorator],
};
export const DarkRedesigned: Story = {
  args: {
    value: ArticleType.Science,
    onChangeType: action('onChangeType'),
  },
  decorators: [NewDesignDecorator, ThemeDecorator(Theme.Dark),],
};
export const BlueRedesigned: Story = {
  args: {
    value: ArticleType.All,
    onChangeType: action('onChangeType'),
  },
  decorators: [NewDesignDecorator, ThemeDecorator(Theme.Blue)],
};
