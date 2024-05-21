import type { Meta, StoryObj } from '@storybook/react';
import { LangSwitcher } from './LangSwitcher';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider/lib';


const meta: Meta<typeof LangSwitcher> = {
  title: 'Shared/LangSwitcher',
  component: LangSwitcher,
  argTypes: {
    className: { control: 'color' },
  },

};

export default meta;
type Story = StoryObj<typeof LangSwitcher>;


export const Light: Story = {
};

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.Dark),]
};