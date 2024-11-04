import type { Meta, StoryObj } from '@storybook/react';
import { CommentList } from './CommentList';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';
import TestIcon from '@/shared/assets/tests/avatarForStorybook.jpg'

const meta: Meta<typeof CommentList> = {
  title: 'Entities/Comment/CommentList',
  component: CommentList,
  argTypes: {
    className: { control: 'color' },
  },
  args: {},
};

export default meta;
type Story = StoryObj<typeof CommentList>;

export const Primary: Story = {
  args: {
    isLoading: false,
    comments: [
      {
        id: '2',
        text: 'comment',
        user: {
          id: '1',
          username: 'VASYA',
          avatar: TestIcon,
        },
      },
      {
        id: '2',
        text: 'comment',
        user: {
          id: '1',
          username: 'VASYA',
          avatar: TestIcon,
        },
      },
    ],
  },
};

export const isLoading: Story = {
  args: {
    isLoading: true,
    comments: [],
  },
};
export const WithoutComments: Story = {
  args: {
    isLoading: false,
    comments: [],
  },
};


export const PrimaryRedesigned: Story = {
  args: {
    isLoading: false,
    comments: [
      {
        id: '2',
        text: 'comment',
        user: {
          id: '1',
          username: 'VASYA',
          avatar: TestIcon,
        },
      },
      {
        id: '2',
        text: 'comment',
        user: {
          id: '1',
          username: 'VASYA',
          avatar: TestIcon,
        },
      },
    ],
  },
  decorators: [NewDesignDecorator]
};

export const isLoadingRedesigned: Story = {
  args: {
    isLoading: true,
    comments: [],
  },
  decorators: [NewDesignDecorator]
};
export const WithoutCommentsRedesigned: Story = {
  args: {
    isLoading: false,
    comments: [],
  },
  decorators: [NewDesignDecorator]
};
