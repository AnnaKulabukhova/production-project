import type { Meta, StoryObj } from '@storybook/react';
import { Popover } from './Popover';
import { PositionDecorator } from '@/shared/config/storybook/PositionDecorator';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

const meta: Meta<typeof Popover> = {
  title: 'Shared/Popups/PopoverRedesign',
  component: Popover,
  argTypes: {
    className: { control: 'color' },
  },
  args: {},
  decorators: [PositionDecorator, NewDesignDecorator],
};

export default meta;
type Story = StoryObj<typeof Popover>;

export const BottomLeft: Story = {
  args: {
    trigger: <button>Open</button>,
    children: (
      <ul>
        <span> First content</span>
        <span> Second content</span>
        <span> Third content</span>
      </ul>
    ),
    direction: 'bottom left',
  },
};

export const BottomRight: Story = {
  args: {
    trigger: <button>Open</button>,
    children: (
      <ul>
        <span> First content</span>
        <span> Second content</span>
        <span> Third content</span>
      </ul>
    ),
    direction: 'bottom right',
  },
};

export const TopLeft: Story = {
  args: {
    trigger: <button>Open</button>,
    children: (
      <ul>
        <span> First content</span>
        <span> Second content</span>
        <span> Third content</span>
      </ul>
    ),
    direction: 'top left',
  },
};

export const TopRight: Story = {
  args: {
    trigger: <button>Open</button>,
    children: (
      <ul>
        <span> First content</span>
        <span> Second content</span>
        <span> Third content</span>
      </ul>
    ),
    direction: 'top right',
  },
};
