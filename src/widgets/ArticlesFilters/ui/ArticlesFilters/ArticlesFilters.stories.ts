import type { Meta, StoryObj } from '@storybook/react';
import { ArticlesFilters } from './ArticlesFilters';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';
import { Theme } from '@/shared/const/theme';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { ArticleSortField, ArticleType } from '@/entities/Article';


const meta: Meta<typeof ArticlesFilters> = {
  title: 'Widgets/ArticlesFilters',
  component: ArticlesFilters,
  argTypes: {
    className: { control: 'color' },
  },
  args: {
    sort: ArticleSortField.Created,
    order: 'asc',
    type: ArticleType.Economics
  },
  decorators: [NewDesignDecorator]
};

export default meta;
type Story = StoryObj<typeof ArticlesFilters>;


export const Primary: Story = {};
export const Dark: Story = { decorators: [NewDesignDecorator, ThemeDecorator(Theme.Dark)] };
export const Blue: Story = { decorators: [NewDesignDecorator, ThemeDecorator(Theme.Blue)] };