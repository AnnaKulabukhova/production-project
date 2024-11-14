import type { Meta, StoryObj } from '@storybook/react';
import { CreatingBlockImage } from './CreatingBlockImage';
// import TestIcon from '@/shared/assets/tests/avatarForStorybook.jpg'

const meta: Meta<typeof CreatingBlockImage> = {
  title: 'Entities/Article/CreatingBlockImage',
  component: CreatingBlockImage,
  argTypes: {
    className: { control: 'color' },
  },
  args: {}
};

export default meta;
type Story = StoryObj<typeof CreatingBlockImage>;

export const Primary: Story = {
  args: {
    description: 'description og image'
  }
};