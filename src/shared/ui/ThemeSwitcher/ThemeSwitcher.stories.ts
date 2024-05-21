import type { Meta, StoryObj } from '@storybook/react';
import { ThemeSwitcher } from './ThemeSwitcher';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider/lib';


const meta: Meta<typeof ThemeSwitcher> = {
  title: 'Shared/ThemeSwitcher',
  component: ThemeSwitcher,
  argTypes: {
    className: { control: 'color' },
  },

};

export default meta;
type Story = StoryObj<typeof ThemeSwitcher>;


export const Light: Story = {
};

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.Dark),]
};