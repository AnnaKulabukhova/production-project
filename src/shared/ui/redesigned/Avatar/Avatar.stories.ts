import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './Avatar';
import AvatarImg from '@/shared/assets/tests/avatarForStorybook.jpg';

const meta: Meta<typeof Avatar> = {
  title: 'Shared/AvatarRedesign',
  component: Avatar,
  argTypes: {
    className: { control: 'color' },
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Big: Story = {
  args: {
    size: 150,
    src: AvatarImg,
  },
};
export const Small: Story = {
  args: {
    size: 50,
    src: AvatarImg,
  },
};
