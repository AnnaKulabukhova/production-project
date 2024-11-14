import type { Meta, StoryObj } from '@storybook/react';
import { InputFile } from './InputFile';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';
import Icon from '@/shared/assets/icons/image-plus-line.svg'

const meta: Meta<typeof InputFile> = {
  title: 'Shared/InputFile',
  component: InputFile,
  argTypes: {
    className: { control: 'color' },
  },
  args: {},
  decorators: [NewDesignDecorator]
};

export default meta;
type Story = StoryObj<typeof InputFile>;

export const Primary: Story = {
  args: {
    img: Icon
  },
};
export const Big: Story = {
  args: {
    img: Icon,
    width: 80,
    height: 80
  },
};
export const Small: Story = {
  args: {
    img: Icon,
    width: 20,
    height: 20
  },
};
