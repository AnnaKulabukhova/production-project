import type { Meta, StoryObj } from '@storybook/react';
import { CommentList } from './CommentList';


const meta: Meta<typeof CommentList> = {
  title: 'Shared/CommentList',
  component: CommentList,
  argTypes: {
    className: { control: 'color' },
  },
  args: {}
};

export default meta;
type Story = StoryObj<typeof CommentList>;


export const Primary: Story = {
  args: {
  }
};