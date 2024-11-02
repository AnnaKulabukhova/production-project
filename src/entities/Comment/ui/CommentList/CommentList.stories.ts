import type { Meta, StoryObj } from '@storybook/react';
import { CommentList } from './CommentList';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

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
          avatar: 'https://loxotrona.net/backend/uploads/2022/Schools-Krasnodar/AVATAR-S/2.jpg',
        },
      },
      {
        id: '2',
        text: 'comment',
        user: {
          id: '1',
          username: 'VASYA',
          avatar: 'https://loxotrona.net/backend/uploads/2022/Schools-Krasnodar/AVATAR-S/2.jpg',
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
          avatar: 'https://loxotrona.net/backend/uploads/2022/Schools-Krasnodar/AVATAR-S/2.jpg',
        },
      },
      {
        id: '2',
        text: 'comment',
        user: {
          id: '1',
          username: 'VASYA',
          avatar: 'https://loxotrona.net/backend/uploads/2022/Schools-Krasnodar/AVATAR-S/2.jpg',
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
