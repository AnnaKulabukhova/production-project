import type { Meta, StoryObj } from '@storybook/react';
import { FiltersContainer } from './FiltersContainer';


const meta: Meta<typeof FiltersContainer> = {
  title: 'Shared/FiltersContainer',
  component: FiltersContainer,
  argTypes: {
    className: { control: 'color' },
  },
  args: {}
};

export default meta;
type Story = StoryObj<typeof FiltersContainer>;


export const Primary: Story = {
  args: {
  }
};