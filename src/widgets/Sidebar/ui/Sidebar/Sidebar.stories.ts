import type { Meta, StoryObj } from '@storybook/react';
import { Sidebar } from '../..';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider/lib';
import { StoreProviderDecorator } from 'shared/config/storybook/StoreProviderDecorator';


const meta: Meta<typeof Sidebar> = {
  title: 'Widget/Sidebar',
  component: Sidebar,
  argTypes: {
    className: { control: 'color' },
  },

};

export default meta;
type Story = StoryObj<typeof Sidebar>;


export const Light: Story = {
  decorators: [StoreProviderDecorator({})]
};

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.Dark), StoreProviderDecorator({})]
};