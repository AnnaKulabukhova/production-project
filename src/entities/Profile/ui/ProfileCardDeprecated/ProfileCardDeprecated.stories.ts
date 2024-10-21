import type { Meta, StoryObj } from '@storybook/react';
import { ProfileCardDeprecated } from './ProfileCardDeprecated';


const meta: Meta<typeof ProfileCardDeprecated> = {
  title: 'Shared/ProfileCardDeprecated',
  component: ProfileCardDeprecated,
  argTypes: {
    className: { control: 'color' },
  },
  args: {}
};

export default meta;
type Story = StoryObj<typeof ProfileCardDeprecated>;


export const Primary: Story = {
  args: {
  }
};