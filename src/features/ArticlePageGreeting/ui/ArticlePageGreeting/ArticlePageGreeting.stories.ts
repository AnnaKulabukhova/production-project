import type { Meta, StoryObj } from '@storybook/react';
import { ArticlePageGreeting } from './ArticlePageGreeting';


const meta: Meta<typeof ArticlePageGreeting> = {
  title: 'Shared/ArticlePageGreeting',
  component: ArticlePageGreeting,
  argTypes: {
    className: { control: 'color' },
  },
  args: {}
};

export default meta;
type Story = StoryObj<typeof ArticlePageGreeting>;


export const Primary: Story = {
  args: {
  }
};