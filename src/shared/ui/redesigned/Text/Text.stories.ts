import type { Meta, StoryObj } from '@storybook/react';
import { Text } from './Text';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

const meta: Meta<typeof Text> = {
  title: 'Shared/Text',
  component: Text,
  argTypes: {
    className: { control: 'color' },
  },
  decorators: [NewDesignDecorator]
};

export default meta;
type Story = StoryObj<typeof Text>;

export const PrimaryVariant: Story = {
  args: {
    title: 'Title',
    text: ' Text Text Text Text Text ',
    variant: 'primary'
  },
};
export const OnlyTitle: Story = {
  args: {
    title: 'Title',
  },
};
export const OnlyText: Story = {
  args: {
    text: ' Text Text Text Text Text ',
  },
};
export const ErrorVaryant: Story = {
  args: {
    title: 'Title',
    text: ' Text Text Text Text Text ',
    variant: 'error',
  },
};
export const ErrorAccent: Story = {
  args: {
    title: 'Title',
    text: ' Text Text Text Text Text ',
    variant: 'accent',
  },
};

export const SizeS: Story = {
  args: {
    title: 'Title',
    text: ' Text Text Text Text Text ',
    size: 's',
  },
};
export const SizeM: Story = {
  args: {
    title: 'Title',
    text: ' Text Text Text Text Text ',
    size: 'm',
  },
};
export const SizeL: Story = {
  args: {
    title: 'Title',
    text: ' Text Text Text Text Text ',
    size: 'l',
  },
};
export const AlignLeft: Story = {
  args: {
    title: 'Title',
    text: 'Text Text Text Text Text ',
    align: 'left'
  },
};
export const AlignRight: Story = {
  args: {
    title: 'Title',
    text: 'Text Text Text Text Text ',
    align: 'right'
  },
};
export const AlignCenter: Story = {
  args: {
    title: 'Title',
    text: 'Text Text Text Text Text ',
    align: 'center'
  },
};

export const Bold: Story = {
  args: {
    title: 'Title',
    text: 'Text Text Text Text Text ',
    bold: true
  },
};
