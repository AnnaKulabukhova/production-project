import type { Meta, StoryObj } from '@storybook/react';
import { ViewSelectorContainer } from './ViewSelectorContainer';


const meta: Meta<typeof ViewSelectorContainer> = {
  title: 'Shared/ViewSelectorContainer',
  component: ViewSelectorContainer,
  argTypes: {
    className: { control: 'color' },
  },
  args: {}
};

export default meta;
type Story = StoryObj<typeof ViewSelectorContainer>;


export const Primary: Story = {
  args: {
  }
};