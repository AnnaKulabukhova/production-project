import type { Meta, StoryObj } from '@storybook/react';
import { PageLoader } from './PageLoader';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider/lib';


const meta: Meta<typeof PageLoader> = {
  title: 'Widget/PageLoader',
  component: PageLoader,
  argTypes: {
    className: { control: 'color' },
  },

};

export default meta;
type Story = StoryObj<typeof PageLoader>;


export const Light: Story = {};

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.Dark),]
};