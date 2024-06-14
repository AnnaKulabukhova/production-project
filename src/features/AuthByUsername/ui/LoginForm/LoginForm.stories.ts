import type { Meta, StoryObj } from '@storybook/react';
import LoginForm from './LoginForm';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider/lib';
import { StoreProviderDecorator } from 'shared/config/storybook/StoreProviderDecorator';

const meta: Meta<typeof LoginForm> = {
  title: 'Features/LoginForm',
  component: LoginForm,
  argTypes: {
    className: { control: 'color' },
  },
}

export default meta;
type Story = StoryObj<typeof LoginForm>;

export const Light: Story = {
  decorators: [StoreProviderDecorator({ loginForm: { username: 'admin', password: '123', isLoading: false } })]
};


export const Dark: Story = {
  decorators: [
    ThemeDecorator(Theme.Dark),
    StoreProviderDecorator({ loginForm: { username: 'admin', password: '123', isLoading: false } })]
};

export const WithError: Story = {
  decorators: [StoreProviderDecorator({ loginForm: { username: 'admin', password: '123', error: "Error!", isLoading: false } })]
};
export const Loading: Story = {
  decorators: [StoreProviderDecorator({ loginForm: { username: '', password: '', isLoading: true } })]
};