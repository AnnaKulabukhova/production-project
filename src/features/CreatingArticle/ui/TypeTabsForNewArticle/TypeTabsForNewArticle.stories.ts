import type { Meta, StoryObj } from '@storybook/react';
import { TypeTabsForNewArticle } from './TypeTabsForNewArticle';
import { StoreProviderDecorator } from '@/shared/config/storybook/StoreProviderDecorator';
import { ArticleType } from '@/entities/Article';


const meta: Meta<typeof TypeTabsForNewArticle> = {
  title: 'Features/CreatingArticle/TypeTabsForNewArticle',
  component: TypeTabsForNewArticle,
  argTypes: {
    className: { control: 'color' },
  },
  args: {},
  decorators: [StoreProviderDecorator({})]
};

export default meta;
type Story = StoryObj<typeof TypeTabsForNewArticle>;


export const Primary: Story = {
  args: {
    value: [ArticleType.Economics, ArticleType.Science]
  }
};