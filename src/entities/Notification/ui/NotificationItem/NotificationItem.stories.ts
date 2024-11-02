import type { Meta, StoryObj } from '@storybook/react';
import { NotificationItem } from './NotificationItem';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

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

export const TextRedesigned: Story = {
  args: {
    item: {
      title: 'text',
      id: '1',
      description: 'Description',
    },
  },
  decorators: [NewDesignDecorator]
};
export const LinkRedesigned: Story = {
  args: {
    item: {
      title: 'text',
      id: '1',
      description: 'Description',
      href: 'gggg',
    },
  },
  decorators: [NewDesignDecorator]
};
