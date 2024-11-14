import type { Meta, StoryObj } from '@storybook/react';
import { AppLink } from './AppLink';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

const meta: Meta<typeof AppLink> = {
  title: 'Shared/AppLink',
  component: AppLink,
  argTypes: {
    className: { control: 'color' },
  },
  args: { to: '/' },
  decorators: [NewDesignDecorator]
};

export default meta;
type Story = StoryObj<typeof AppLink>;

export const Primary: Story = {
  args: {
    children: 'text',
    variant: 'primary',
  },
};

export const Error: Story = {
  args: {
    children: 'text',
    variant: 'red',
  },
};

