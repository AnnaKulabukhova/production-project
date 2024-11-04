import type { Meta, StoryObj } from '@storybook/react';
import { ArticleAdditionalInfo } from './ArticleAdditionalInfo';
import TestIcon from '@/shared/assets/tests/avatarForStorybook.jpg'

const meta: Meta<typeof ArticleAdditionalInfo> = {
  title: 'Widgets/ArticleAdditionalInfo',
  component: ArticleAdditionalInfo,
  args: {},
};

export default meta;
type Story = StoryObj<typeof ArticleAdditionalInfo>;

export const Primary: Story = {
  args: {
    author: { avatar: TestIcon, id: '1', username: 'Admin' },
    views: 2,
    createdAt: '15.10.2022'
  },
};




