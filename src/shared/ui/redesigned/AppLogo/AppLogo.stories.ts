import type { Meta, StoryObj } from '@storybook/react';
import { AppLogo } from './AppLogo';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';


const meta: Meta<typeof AppLogo> = {
  title: 'Shared/AppLogo',
  component: AppLogo,
  argTypes: {
    className: { control: 'color' },
  },
  args: {},
  decorators: [NewDesignDecorator]
};

export default meta;
type Story = StoryObj<typeof AppLogo>;


export const Big: Story = {
  args: {
    size: 80
  }
};
export const Small: Story = {
  args: {
    size: 30
  }
};