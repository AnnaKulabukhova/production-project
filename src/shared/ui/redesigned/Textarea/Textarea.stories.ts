import type { Meta, StoryObj } from '@storybook/react';
import { Textarea } from './Textarea';


const meta: Meta<typeof Textarea> = {
  title: 'Shared/Textarea',
  component: Textarea,
  argTypes: {
    className: { control: 'color' },
  },
  args: {}
};

export default meta;
type Story = StoryObj<typeof Textarea>;


export const Primary: Story = {
  args: {
  }
};