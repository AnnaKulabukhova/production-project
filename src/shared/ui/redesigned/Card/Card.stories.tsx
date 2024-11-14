import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';
import { Text } from '../Text';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';


const meta: Meta<typeof Card> = {
  title: 'Shared/Card',
  component: Card,
  argTypes: {
    className: { control: 'color' },
  },
  args: {},
  decorators: [NewDesignDecorator]
};

export default meta;
type Story = StoryObj<typeof Card>;

export const LightVariant: Story = {
  args: {
    children: <Text title="title" text="text, text" />,
    variant: 'light'
  },
};

export const OutlinedVariant: Story = {
  args: {
    children: <Text title="title" text="text, text" />,
    variant: 'outlined'
  },
};

export const NormalVariant: Story = {
  args: {
    children: <Text title="title" text="text, text" />,
    variant: 'normal'
  },
};
export const Padding0: Story = {
  args: {
    children: <Text title="title" text="text, text" />,
    padding: '0'
  },
};
export const Padding8: Story = {
  args: {
    children: <Text title="title" text="text, text" />,
    padding: '8'
  },
};
export const Padding16: Story = {
  args: {
    children: <Text title="title" text="text, text" />,
    padding: '16'
  },
};
export const Padding24: Story = {
  args: {
    children: <Text title="title" text="text, text" />,
    padding: '24'
  },
};
export const Border12: Story = {
  args: {
    children: <Text title="title" text="text, text" />,
    padding: '24',
    border: '12'
  },
};
export const Border16: Story = {
  args: {
    children: <Text title="title" text="text, text" />,
    padding: '24',
    border: '16'
  },
};
export const Border32: Story = {
  args: {
    children: <Text title="title" text="text, text" />,
    padding: '24',
    border: '32'
  },
};
export const Border42: Story = {
  args: {
    children: <Text title="title" text="text, text" />,
    padding: '24',
    border: '42'
  },
};
export const fullHeight: Story = {
  args: {
    children: <Text title="title" text="text, text" />,
    fullHeight: true
  },
};

