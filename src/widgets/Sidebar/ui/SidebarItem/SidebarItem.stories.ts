import type { Meta, StoryObj } from '@storybook/react';
import { Sidebar } from '../../ui/Sidebar/Sidebar';
import { StoreProviderDecorator } from '@/shared/config/storybook/StoreProviderDecorator';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

const meta: Meta<typeof Sidebar> = {
  title: 'Widgets/Sidebar/SidebarItem',
  component: Sidebar,
  argTypes: {
    className: { control: 'color' },
  },
  decorators: [StoreProviderDecorator({ user: { authData: { id: '1' } } })],
};

export default meta;
type Story = StoryObj<typeof Sidebar>;

export const Light: Story = {};

export const LightRedesigned: Story = { decorators: [NewDesignDecorator], };
