import type { Meta, StoryObj } from '@storybook/react';
import { CreateArticle } from './CreateArticle';


const meta: Meta<typeof CreateArticle> = {
  title: 'Shared/CreateArticle',
  component: CreateArticle,
  argTypes: {
    className: { control: 'color' },
  },
  args: {}
};

export default meta;
type Story = StoryObj<typeof CreateArticle>;


export const Primary: Story = {
  args: {
  }
};