import type { Meta, StoryObj } from '@storybook/react';
import { ArticleDetailsPageHeader } from './ArticleDetailsPageHeader';
import { StoreProviderDecorator } from '@/shared/config/storybook/StoreProviderDecorator';

const meta: Meta<typeof ArticleDetailsPageHeader> = {
  title: 'Pages/ArticleDetailsPage/ArticleDetailsPageHeader',
  component: ArticleDetailsPageHeader,
  argTypes: {
    className: { control: 'color' },
  },
  args: {},
  decorators: [StoreProviderDecorator({})],
};

export default meta;
type Story = StoryObj<typeof ArticleDetailsPageHeader>;

export const canEdit: Story = {
  decorators: [
    StoreProviderDecorator({
      user: {
        authData: { id: '1' },
      },
      articleDetails: { data: { user: { id: '1' } } },
    }),
  ],
};
export const CanNotEdit: Story = {
  decorators: [
    StoreProviderDecorator({
      user: {
        authData: { id: '1' },
      },
      articleDetails: { data: { user: { id: '2' } } },
    }),
  ],
};
