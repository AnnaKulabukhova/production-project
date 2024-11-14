import type { Meta, StoryObj } from '@storybook/react';
import AddCommentForm from './AddCommentForm';
import { action } from '@storybook/addon-actions';
import { StoreProviderDecorator } from '@/shared/config/storybook/StoreProviderDecorator';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

const meta: Meta<typeof AddCommentForm> = {
  title: 'Features/AddCommentForm',
  component: AddCommentForm,
  argTypes: {
    className: { control: 'color' },
  },
  args: {},
  decorators: [StoreProviderDecorator({})],
};

export default meta;
type Story = StoryObj<typeof AddCommentForm>;

export const Primary: Story = {
  args: {
    onSendComment: action('onSendComment'),
  },
};

export const PrimaryRedesigned: Story = {
  args: {
    onSendComment: action('onSendComment'),
  },
  decorators: [NewDesignDecorator]
};
