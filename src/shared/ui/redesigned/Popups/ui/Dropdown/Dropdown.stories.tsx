import type { Meta, StoryObj } from '@storybook/react';
import { Dropdown } from './Dropdown';
import { Button } from '../../../Button';
import { PositionDecorator } from '@/shared/config/storybook/PositionDecorator';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

const meta: Meta<typeof Dropdown> = {
  title: 'Shared/Popups/DropdownRedesign',
  component: Dropdown,
  argTypes: {
    className: { control: 'color' },
  },
  args: {},
  decorators: [PositionDecorator, NewDesignDecorator],
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

export const BottomLeft: Story = {
  args: {
    trigger: <Button>Open</Button>,
    items: [
      {
        content: 'First content',
      },
      {
        content: 'Second content',
      },
      {
        content: 'Third content',
      },
    ],
    direction: 'bottom left',
  },
};
export const BottomRight: Story = {
  args: {
    trigger: <Button>Open</Button>,
    items: [
      {
        content: 'First content',
      },
      {
        content: 'Second content',
      },
      {
        content: 'Third content',
      },
    ],
    direction: 'bottom right',
  },
};
export const TopLeft: Story = {
  args: {
    trigger: <Button>Open</Button>,
    items: [
      {
        content: 'First content',
      },
      {
        content: 'Second content',
      },
      {
        content: 'Third content',
      },
    ],
    direction: 'top left',
  },
};
export const TopRight: Story = {
  args: {
    trigger: <Button>Open</Button>,
    items: [
      {
        content: 'First content',
      },
      {
        content: 'Second content',
      },
      {
        content: 'Third content',
      },
    ],
    direction: 'top right',
  },
};
