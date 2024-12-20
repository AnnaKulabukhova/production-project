import { ArticlesViews } from '@/entities/Article';
import type { Meta, StoryObj } from '@storybook/react';
import { ArticlesViewSelector } from './ArticlesViewSelector';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

const meta: Meta<typeof ArticlesViewSelector> = {
  title: 'Features/Article/ArticlesViewSelector',
  component: ArticlesViewSelector,
  argTypes: {
    className: { control: 'color' },
  },
  args: {},
};
export default meta;
type Story = StoryObj<typeof ArticlesViewSelector>;
export const Big: Story = {
  args: {
    view: ArticlesViews.Big,
  },
};
export const Small: Story = {
  args: {
    view: ArticlesViews.Small,
  },
};

export const Redesigned: Story = {
  args: {
    view: ArticlesViews.Big,
  },
  decorators: [NewDesignDecorator]
};
