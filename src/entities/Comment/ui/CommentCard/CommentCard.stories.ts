import type { Meta, StoryObj } from '@storybook/react';
import { CommentCard } from './CommentCard';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';
import TestIcon from '@/shared/assets/tests/avatarForStorybook.jpg'

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

const normalArgs = {
  comment: {
    id: '2',
    text: 'comment',
    user: {
      id: '1',
      username: 'VASYA',
      avatar: TestIcon,
    },
  },
}

export const Normal: Story = {
  args: normalArgs

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
        avatar: TestIcon,
      },
    },
  },
};
export const NormalRedesigned: Story = {
  args: normalArgs,
  decorators: [NewDesignDecorator]
};
export const isLoadingRedesigned: Story = {
  args: {
    isLoading: true,
    comment: {
      id: '2',
      text: 'comment',
      user: {
        id: '1',
        username: 'VASYA',
        avatar: TestIcon,
      },
    },
  },
  decorators: [NewDesignDecorator]
};
