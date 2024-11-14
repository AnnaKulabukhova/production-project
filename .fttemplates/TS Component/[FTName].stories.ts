import type { Meta, StoryObj } from '@storybook/react';
import { [FTName] } from './[FTName]';

const meta: Meta<typeof [FTName]> = {
  title: 'Shared/[FTName]',
  component: [FTName],
  argTypes: {
    className: { control: 'color' },
  },
  args: {}
};

export default meta;
type Story = StoryObj<typeof [FTName]>;

export const Primary: Story = {
  args: {
  }
};