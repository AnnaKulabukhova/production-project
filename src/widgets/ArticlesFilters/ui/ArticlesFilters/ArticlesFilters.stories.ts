import type { Meta, StoryObj } from '@storybook/react';
import { ArticlesFilters } from './ArticlesFilters';


const meta: Meta<typeof ArticlesFilters> = {
  title: 'Shared/ArticlesFilters',
  component: ArticlesFilters,
  argTypes: {
    className: { control: 'color' },
  },
  args: {}
};

export default meta;
type Story = StoryObj<typeof ArticlesFilters>;


export const Primary: Story = {
  args: {
  }
};