import type { Meta, StoryObj } from '@storybook/react';
import { UiDesignSwitcher } from './UiDesignSwitcher';


const meta: Meta<typeof UiDesignSwitcher> = {
  title: 'Shared/UiDesignSwitcher',
  component: UiDesignSwitcher,
  argTypes: {
    className: { control: 'color' },
  },
  args: {}
};

export default meta;
type Story = StoryObj<typeof UiDesignSwitcher>;


export const Primary: Story = {
  args: {
  }
};