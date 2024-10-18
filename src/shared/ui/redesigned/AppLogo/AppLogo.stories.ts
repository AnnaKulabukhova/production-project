import type { Meta, StoryObj } from '@storybook/react';
import { AppLogo } from './AppLogo';


const meta: Meta<typeof AppLogo> = {
  title: 'Shared/AppLogo',
  component: AppLogo,
  argTypes: {
    className: { control: 'color' },
  },
  args: {}
};

export default meta;
type Story = StoryObj<typeof AppLogo>;


export const Primary: Story = {
  args: {
  }
};