import type { Meta, StoryObj } from '@storybook/react';
import { Flex } from './Flex';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

const meta: Meta<typeof Flex> = {
  title: 'Shared/Flex',
  component: Flex,
  argTypes: {
    className: { control: 'color' },
  },
  args: {},
};

export default meta;
type Story = StoryObj<typeof Flex>;

export const Row: Story = {
  args: {
    children: (
      <>
        <div>first</div>
        <div>first</div>
        <div>first</div>
        <div>first</div>
      </>
    ),
  },
};

export const RowGap4: Story = {
  args: {
    gap: '4',
    children: (
      <>
        <div>first</div>
        <div>first</div>
        <div>first</div>
        <div>first</div>
      </>
    ),
  },
};

export const RowGap8: Story = {
  args: {
    gap: '8',
    children: (
      <>
        <div>first</div>
        <div>first</div>
        <div>first</div>
        <div>first</div>
      </>
    ),
  },
};

export const RowGap16: Story = {
  args: {
    gap: '16',
    children: (
      <>
        <div>first</div>
        <div>first</div>
        <div>first</div>
        <div>first</div>
      </>
    ),
  },
};

export const RowGap32: Story = {
  args: {
    gap: '32',
    children: (
      <>
        <div>first</div>
        <div>first</div>
        <div>first</div>
        <div>first</div>
      </>
    ),
  },
};

export const Column: Story = {
  args: {
    direction: 'column',
    children: (
      <>
        <div>first</div>
        <div>first</div>
        <div>first</div>
        <div>first</div>
      </>
    ),
  },
};

export const ColumnAlignEnd: Story = {
  args: {
    align: 'end',
    direction: 'column',
    children: (
      <>
        <div>first</div>
        <div>first</div>
        <div>first</div>
        <div>first</div>
      </>
    ),
  },
};

export const ColumnGap16: Story = {
  args: {
    gap: '16',
    direction: 'column',
    children: (
      <>
        <div>first</div>
        <div>first</div>
        <div>first</div>
        <div>first</div>
      </>
    ),
  },
};

export const ColumnGap32: Story = {
  args: {
    gap: '32',
    direction: 'column',
    children: (
      <>
        <div>first</div>
        <div>first</div>
        <div>first</div>
        <div>first</div>
      </>
    ),
  },
};
export const RowRedesigned: Story = {
  args: {
    children: (
      <>
        <div>first</div>
        <div>first</div>
        <div>first</div>
        <div>first</div>
      </>
    ),
  },
  decorators: [NewDesignDecorator]
};

export const RowGap4Redesigned: Story = {
  args: {
    gap: '4',
    children: (
      <>
        <div>first</div>
        <div>first</div>
        <div>first</div>
        <div>first</div>
      </>
    ),
  },
  decorators: [NewDesignDecorator]
};

export const RowGap8Redesigned: Story = {
  args: {
    gap: '8',
    children: (
      <>
        <div>first</div>
        <div>first</div>
        <div>first</div>
        <div>first</div>
      </>
    ),
  },
  decorators: [NewDesignDecorator]
};

export const RowGap16Redesigned: Story = {
  args: {
    gap: '16',
    children: (
      <>
        <div>first</div>
        <div>first</div>
        <div>first</div>
        <div>first</div>
      </>
    ),
  },
  decorators: [NewDesignDecorator]
};

export const RowGap32Redesigned: Story = {
  args: {
    gap: '32',
    children: (
      <>
        <div>first</div>
        <div>first</div>
        <div>first</div>
        <div>first</div>
      </>
    ),
  },
  decorators: [NewDesignDecorator]
};

export const ColumnRedesigned: Story = {
  args: {
    direction: 'column',
    children: (
      <>
        <div>first</div>
        <div>first</div>
        <div>first</div>
        <div>first</div>
      </>
    ),
  },
  decorators: [NewDesignDecorator]
};

export const ColumnAlignEndRedesigned: Story = {
  args: {
    align: 'end',
    direction: 'column',
    children: (
      <>
        <div>first</div>
        <div>first</div>
        <div>first</div>
        <div>first</div>
      </>
    ),
  },
  decorators: [NewDesignDecorator]
};

export const ColumnGap16Redesigned: Story = {
  args: {
    gap: '16',
    direction: 'column',
    children: (
      <>
        <div>first</div>
        <div>first</div>
        <div>first</div>
        <div>first</div>
      </>
    ),
  },
  decorators: [NewDesignDecorator]
};

export const ColumnGap32Redesigned: Story = {
  args: {
    gap: '32',
    direction: 'column',
    children: (
      <>
        <div>first</div>
        <div>first</div>
        <div>first</div>
        <div>first</div>
      </>
    ),
  },
  decorators: [NewDesignDecorator]
};
