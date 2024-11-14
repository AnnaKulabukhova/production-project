import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './Avatar';
import AvatarImg from '@/shared/assets/tests/avatarForStorybook.jpg';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

const meta: Meta<typeof Avatar> = {
  title: 'Shared/Avatar',
  component: Avatar,
  argTypes: {
    className: { control: 'color' },
  },
  decorators: [NewDesignDecorator]
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
