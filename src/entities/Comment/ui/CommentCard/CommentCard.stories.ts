import type { Meta, StoryObj } from '@storybook/react';
import { CommentCard } from './CommentCard';

const meta: Meta<typeof CommentCard> = {
  title: 'Entities/Comment/CommentCard',
  component: CommentCard,
  argTypes: {
    className: { control: 'color' },
  },
  args: {},
};

export default meta;
type Story = StoryObj<typeof CommentCard>;

export const Primary: Story = {
  args: {
    comment: {
      id: '2',
      text: 'comment',
      user: {
        id: '1',
        username: 'VASYA',
        avatar: 'https://loxotrona.net/backend/uploads/2022/Schools-Krasnodar/AVATAR-S/2.jpg',
      },
    },
  },
};

export const isLoading: Story = {
  args: {
    isLoading: true,
    comment: {
      id: '2',
      text: 'comment',
      user: {
        id: '1',
        username: 'VASYA',
        avatar: 'https://loxotrona.net/backend/uploads/2022/Schools-Krasnodar/AVATAR-S/2.jpg',
      },
    },
  },
};
