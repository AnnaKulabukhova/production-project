import type { Meta, StoryObj } from '@storybook/react';
import SettingsPage from './SettingsPage';


const meta: Meta<typeof SettingsPage> = {
  title: 'Shared/SettingsPage',
  component: SettingsPage,
  argTypes: {
    className: { control: 'color' },
  },
  args: {}
};

export default meta;
type Story = StoryObj<typeof SettingsPage>;


export const Primary: Story = {
  args: {
  }
};