import type { Meta, StoryObj } from '@storybook/react';
import SettingsPage from './SettingsPage';
import { StoreProviderDecorator } from '@/shared/config/storybook/StoreProviderDecorator';

const meta: Meta<typeof SettingsPage> = {
  title: 'Pages/SettingsPage',
  component: SettingsPage,
  argTypes: {
    className: { control: 'color' },
  },
  args: {},
  decorators: [StoreProviderDecorator({})]
};

export default meta;
type Story = StoryObj<typeof SettingsPage>;


export const Primary: Story = {};