import type { Meta, StoryObj } from '@storybook/react';
import { ProfileCardRedesigned } from './ProfileCardRedesigned';


const meta: Meta<typeof ProfileCardRedesigned> = {
  title: 'Shared/ProfileCardRedesigned',
  component: ProfileCardRedesigned,
  argTypes: {
    className: { control: 'color' },
  },
  args: {}
};

export default meta;
type Story = StoryObj<typeof ProfileCardRedesigned>;


export const Primary: Story = {
  args: {
  }
};