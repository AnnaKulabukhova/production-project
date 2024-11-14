import type { Meta, StoryObj } from '@storybook/react';
import { ArticleDetailsPageHeader } from './ArticleDetailsPageHeader';
import { StoreProviderDecorator } from '@/shared/config/storybook/StoreProviderDecorator';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

const meta: Meta<typeof ArticleDetailsPageHeader> = {
  title: 'Pages/ArticleDetailsPage/ArticleDetailsPageHeader',
  component: ArticleDetailsPageHeader,
  argTypes: {
    className: { control: 'color' },
  },
};

export default meta;
type Story = StoryObj<typeof ArticleDetailsPageHeader>;


export const Primary: Story = {
  decorators: [
    StoreProviderDecorator({}),
  ],
};

export const PrimaryRedesigned: Story = {
  decorators: [
    NewDesignDecorator,
    StoreProviderDecorator({}),
  ],
};
