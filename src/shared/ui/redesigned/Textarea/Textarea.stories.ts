import type { Meta, StoryObj } from '@storybook/react';
import { Textarea } from './Textarea';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';


const meta: Meta<typeof Textarea> = {
  title: 'Shared/Textarea',
  component: Textarea,
  argTypes: {
    className: { control: 'color' },
  },
  args: {},
  decorators: [NewDesignDecorator]
};

export default meta;
type Story = StoryObj<typeof Textarea>;


export const Primary: Story = {
  args: {
    value: 'Text  Text Text Text Text Text Text Text Text Text Text TextText Text Text'
  }
};
export const Empty: Story = {
  args: {
    placeholder: 'text'
  }
};

export const Bold: Story = {
  args: {
    value: 'Text  Text Text Text Text Text Text Text Text Text Text TextText Text Text',
    bold: true
  }
};