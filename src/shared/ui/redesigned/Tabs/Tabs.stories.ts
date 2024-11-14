import type { Meta, StoryObj } from '@storybook/react';
import { Tabs } from './Tabs';
import { action } from '@storybook/addon-actions';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';
import { PositionDecorator } from '@/shared/config/storybook/PositionDecorator';

const meta: Meta<typeof Tabs> = {
  title: 'Shared/Tabs',
  component: Tabs,
  argTypes: {
    className: { control: 'color' },
  },
  args: {},
  decorators: [PositionDecorator, NewDesignDecorator,]
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const Column: Story = {
  args: {
    tabs: [
      {
        content: 'tab 1',
        value: 'tab 1',
      },
      {
        content: 'tab 2',
        value: 'tab 2',
      },
      {
        content: 'tab 3',
        value: 'tab 3',
      },
    ],
    value: 'tab 2',
    onTabClick: action('onTabClick'),
    direction: 'column'
  }
};
export const Row: Story = {
  args: {
    tabs: [
      {
        content: 'tab 1',
        value: 'tab 1',
      },
      {
        content: 'tab 2',
        value: 'tab 2',
      },
      {
        content: 'tab 3',
        value: 'tab 3',
      },
    ],
    value: 'tab 2',
    onTabClick: action('onTabClick'),
    direction: 'row'
  }
};
