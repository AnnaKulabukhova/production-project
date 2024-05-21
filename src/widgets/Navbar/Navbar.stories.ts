import type { Meta, StoryObj } from '@storybook/react';
import { Navbar } from './Navbar';
import { ThemeDecorator } from '../../shared/config/storybook/ThemeDecorator';
import { Theme } from '../../app/providers/ThemeProvider/lib';


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
};

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.Dark),]
};