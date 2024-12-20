import type { Meta, StoryObj } from '@storybook/react';
import { Code } from './Code';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

const meta: Meta<typeof Code> = {
  title: 'Shared/Code',
  component: Code,
  argTypes: {
    className: { control: 'color' },
  },
  args: {},
};

export default meta;
type Story = StoryObj<typeof Code>;

export const Primary: Story = {
  args: {
    text: `const meta: Meta<typeof Code> = {
  title: 'Shared/Code',
  component: Code,
  argTypes: {
    className: { control: 'color' },
  },
  args: {}
};

export default meta;
type Story = StoryObj<typeof Code>;`,
  },
};
export const PrimaryRedesigned: Story = {
  args: {
    text: `const meta: Meta<typeof Code> = {
  title: 'Shared/Code',
  component: Code,
  argTypes: {
    className: { control: 'color' },
  },
  args: {}
};

export default meta;
type Story = StoryObj<typeof Code>;`,
  },
  decorators: [NewDesignDecorator]
};
