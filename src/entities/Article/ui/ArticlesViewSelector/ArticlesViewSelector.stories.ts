import type { Meta, StoryObj } from '@storybook/react';
import { ArticlesViewSelector } from './ArticlesViewSelector'
import { ArticlesViews } from 'entities/Article/model/types/article';
const meta: Meta<typeof ArticlesViewSelector> = {
  title: 'Entities/ArticlesViewSelector',
  component: ArticlesViewSelector,
  argTypes: {
    className: { control: 'color' },
  },
  args: {}
};
export default meta;
type Story = StoryObj<typeof ArticlesViewSelector>;
export const Big: Story = {
  args: {
    view: ArticlesViews.Big
  }
};
export const Small: Story = {
  args: {
    view: ArticlesViews.Small
  }
};