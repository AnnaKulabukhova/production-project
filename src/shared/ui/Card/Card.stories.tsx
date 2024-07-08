import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';
import { Text } from '../Text'


const meta: Meta<typeof Card> = {
  title: 'Shared/Card',
  component: Card,
  argTypes: {
    className: { control: 'color' },
  },
  args: {}
};

export default meta;
type Story = StoryObj<typeof Card>;


export const Primary: Story = {
  args: {
    children: <Text title='title' text='text, text' />
  }
};