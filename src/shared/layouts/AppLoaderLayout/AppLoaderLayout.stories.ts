import type { Meta, StoryObj } from '@storybook/react';
import { AppLoaderLayout } from './AppLoaderLayout';


const meta: Meta<typeof AppLoaderLayout> = {
  title: 'Shared/AppLoaderLayout',
  component: AppLoaderLayout,
  argTypes: {
    className: { control: 'color' },
  },
  args: {}
};

export default meta;
type Story = StoryObj<typeof AppLoaderLayout>;


export const Primary: Story = {
  args: {
  }
};