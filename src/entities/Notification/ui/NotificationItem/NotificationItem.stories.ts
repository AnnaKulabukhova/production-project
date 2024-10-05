import type { Meta, StoryObj } from '@storybook/react';
import { NotificationItem } from './NotificationItem';

const meta: Meta<typeof NotificationItem> = {
  title: 'Entities/Notification/NotificationItem',
  component: NotificationItem,
  argTypes: {
    className: { control: 'color' },
  },
  args: {},
  // decorators:
};

export default meta;
type Story = StoryObj<typeof NotificationItem>;

export const Text: Story = {
  args: {
    item: {
      title: 'text',
      id: '1',
      description: 'Description',
    },
  },
};
export const Link: Story = {
  args: {
    item: {
      title: 'text',
      id: '1',
      description: 'Description',
      href: 'gggg',
    },
  },
};
