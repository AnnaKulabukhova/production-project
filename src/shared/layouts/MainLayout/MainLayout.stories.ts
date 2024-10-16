import type { Meta, StoryObj } from '@storybook/react';
import { MainLayout } from './MainLayout';


const meta: Meta<typeof MainLayout> = {
  title: 'Shared/MinLayout',
  component: MainLayout,
  argTypes: {
    className: { control: 'color' },
  },
  args: {}
};

export default meta;
type Story = StoryObj<typeof MainLayout>;


export const Primary: Story = {
  args: {
  }
};