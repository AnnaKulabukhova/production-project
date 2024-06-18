import type { Meta, StoryObj } from '@storybook/react';
import { Navbar } from './Navbar';
import { ThemeDecorator } from '../../shared/config/storybook/ThemeDecorator';
import { Theme } from '../../app/providers/ThemeProvider/lib';
import { StoreProviderDecorator } from 'shared/config/storybook/StoreProviderDecorator';

const meta: Meta<typeof Navbar> = {
  title: 'Widget/Navbar',
  component: Navbar,
  argTypes: {
    className: { control: 'color' },
  },
};

export default meta;
type Story = StoryObj<typeof Navbar>;


export const Light: Story = {
  decorators: [
    StoreProviderDecorator({ user: { authData: { username: 'dgg', id: '5' } } })
  ]
};

export const Dark: Story = {
  decorators: [
    ThemeDecorator(Theme.Dark),
    StoreProviderDecorator({})
  ]
};

export const AuthNavbar: Story = {
  decorators: [
    StoreProviderDecorator({ user: { authData: undefined } })
  ]
};