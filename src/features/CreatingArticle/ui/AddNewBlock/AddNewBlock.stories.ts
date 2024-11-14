import type { Meta, StoryObj } from '@storybook/react';
import { AddNewBlock } from './AddNewBlock';
import { StoreProviderDecorator } from '@/shared/config/storybook/StoreProviderDecorator';
import { PositionDecorator } from '@/shared/config/storybook/PositionDecorator';

const meta: Meta<typeof AddNewBlock> = {
  title: 'Features/CreatingArticle/AddNewBlock',
  component: AddNewBlock,
  argTypes: {
    className: { control: 'color' },
  },
  decorators: [PositionDecorator, StoreProviderDecorator({})]
};

export default meta;
type Story = StoryObj<typeof AddNewBlock>;

export const Primary: Story = {
  args: {
    blockArticles: []
  }
};