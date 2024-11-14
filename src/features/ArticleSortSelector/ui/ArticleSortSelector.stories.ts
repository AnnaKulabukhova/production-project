import type { Meta, StoryObj } from '@storybook/react';
import { ArticleSortField } from '@/entities/Article/model/consts/articleConsts';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { ArticleSortSelector } from './ArticleSortSelector';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

const meta: Meta<typeof ArticleSortSelector> = {
  title: 'Features/Article/ArticleSortSelector',
  component: ArticleSortSelector,
  argTypes: {
    className: { control: 'color' },
  },
  args: {},
};

export default meta;
type Story = StoryObj<typeof ArticleSortSelector>;

export const Primary: Story = {
  args: {
    order: 'asc',
    sort: ArticleSortField.Title,
  },
};

export const Dark: Story = {
  args: {
    order: 'asc',
    sort: ArticleSortField.Title,
  },
  decorators: [ThemeDecorator(Theme.Dark)],
};
export const Blue: Story = {
  args: {
    order: 'desc',
    sort: ArticleSortField.Views,
  },
  decorators: [ThemeDecorator(Theme.Blue)],
};

export const PrimaryRedesigned: Story = {
  args: {
    order: 'asc',
    sort: ArticleSortField.Title,
  },
  decorators: [NewDesignDecorator,],
};

export const DarkRedesigned: Story = {
  args: {
    order: 'asc',
    sort: ArticleSortField.Title,
  },
  decorators: [NewDesignDecorator, ThemeDecorator(Theme.Dark)],
};
export const BlueRedesigned: Story = {
  args: {
    order: 'desc',
    sort: ArticleSortField.Views,
  },
  decorators: [NewDesignDecorator, ThemeDecorator(Theme.Blue)],
};
