import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { Text } from '../Text';


const meta: Meta<typeof Card> = {
  title: 'Shared/Deprecated/Card',
  component: Card,
  argTypes: {
    className: { control: 'color' },
  },
  args: {},
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Primary: Story = {
  args: {
    children: <Text title="title" text="text, text" />,
  },
};

export const Dark: Story = {
  args: {
    children: <Text title="title" text="text, text" />,
  },
  decorators: [ThemeDecorator(Theme.Dark)],
};

export const Blue: Story = {
  args: {
    children: <Text title="title" text="text, text" />,
  },
  decorators: [ThemeDecorator(Theme.Blue)],
};
