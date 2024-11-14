import type { Meta, StoryObj } from '@storybook/react';
import { CreatingArticle } from './CreatingArticle';
import { StoreProviderDecorator } from '@/shared/config/storybook/StoreProviderDecorator';


const meta: Meta<typeof CreatingArticle> = {
  title: 'Features/CreatingArticle/CreatingArticle',
  component: CreatingArticle,
  argTypes: {
    className: { control: 'color' },
  },
  args: {},
  decorators: [StoreProviderDecorator({})]
};

export default meta;
type Story = StoryObj<typeof CreatingArticle>;


export const Primary: Story = {};