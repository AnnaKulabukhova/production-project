import type { Meta, StoryObj } from '@storybook/react';
import { NotificationList } from './NotificationList';
import { StoreProviderDecorator } from '@/shared/config/storybook/StoreProviderDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/const/theme';

const parameters = {
  mockData: [
    {
      url: `${__API__}/notifications`,
      method: 'GET',
      status: 200,
      response: [
        {
          id: '1',
          title: 'Title',
          description: 'description description description description description',
        },
        {
          id: '2',
          title: 'Title 2',
          description: 'description description description description description',
        },
        {
          id: '3',
          title: 'Title3',
          description: 'description description description description description',
        },
      ],
    },
  ],
};

const meta: Meta<typeof NotificationList> = {
  title: 'Entities/Notification/NotificationList',
  component: NotificationList,
  argTypes: {
    className: { control: 'color' },
  },
  args: {},
  decorators: [StoreProviderDecorator({})],
};

export default meta;
type Story = StoryObj<typeof NotificationList>;

export const Light: Story = {};
Light.parameters = parameters;

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.Dark)],
};
Dark.parameters = parameters;

export const Blue: Story = {
  decorators: [ThemeDecorator(Theme.Blue)],
};
Blue.parameters = parameters;

export const isLoading: Story = {};
isLoading.parameters = {
  layout: 'fullscreen',
  mockData: [
    {
      url: `${__API__}/notifications`,
      method: 'GET',
      status: 200,
      delay: 3000,
      response: [
        {
          id: '1',
          title: 'Title',
          description: 'description description description description description',
        },
        {
          id: '2',
          title: 'Title 2',
          description: 'description description description description description',
        },
        {
          id: '3',
          title: 'Title3',
          description: 'description description description description description',
        },
      ],
    },
  ],
};
