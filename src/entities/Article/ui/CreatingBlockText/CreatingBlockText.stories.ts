import type { Meta, StoryObj } from '@storybook/react';
import { CreatingBlockText } from './CreatingBlockText';


const meta: Meta<typeof CreatingBlockText> = {
  title: 'Entities/Article/CreatingBlockText',
  component: CreatingBlockText,
  argTypes: {
    className: { control: 'color' },
  },
  args: {}
};

export default meta;
type Story = StoryObj<typeof CreatingBlockText>;


export const Primary: Story = {
  args: {
    title: 'title',
    newText: 'Text Text Text Text Text'
  }
};