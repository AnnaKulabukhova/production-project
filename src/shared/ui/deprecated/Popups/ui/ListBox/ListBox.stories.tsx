import type { Meta, StoryObj } from '@storybook/react';
import { ListBox } from './ListBox';
import { PositionDecorator } from '@/shared/config/storybook/PositionDecorator';

const meta: Meta<typeof ListBox> = {
  title: 'Shared/Deprecated/Popups/ListBox',
  component: ListBox,
  argTypes: {
    className: { control: 'color' },
  },
  args: {},
  decorators: [PositionDecorator],
};

export default meta;
type Story = StoryObj<typeof ListBox>;

export const BottomLeft: Story = {
  args: {
    value: '12355',
    items: [
      {
        content: 'sdgdgdsgds',
        value: '123',
      },
      {
        content: 'sdgdgdshhhhhgds',
        value: '1234',
      },
      {
        content: 'sdgdgdttttsgds',
        value: '1235',
      },
    ],
    direction: 'bottom left',
  },
};

export const BottomRight: Story = {
  args: {
    value: '12355',
    items: [
      {
        content: 'sdgdgdsgds',
        value: '123',
      },
      {
        content: 'sdgdgdshhhhhgds',
        value: '1234',
      },
      {
        content: 'sdgdgdttttsgds',
        value: '1235',
      },
    ],
    direction: 'bottom right',
  },
};

export const TopLeft: Story = {
  args: {
    value: '12355',
    items: [
      {
        content: 'sdgdgdsgds',
        value: '123',
      },
      {
        content: 'sdgdgdshhhhhgds',
        value: '1234',
      },
      {
        content: 'sdgdgdttttsgds',
        value: '1235',
      },
    ],
    direction: 'top left',
  },
};

export const TopRight: Story = {
  args: {
    value: '12355',
    items: [
      {
        content: 'sdgdgdsgds',
        value: '123',
      },
      {
        content: 'sdgdgdshhhhhgds',
        value: '1234',
      },
      {
        content: 'sdgdgdttttsgds',
        value: '1235',
      },
    ],
    direction: 'top right',
  },
};
