import type { Meta, StoryObj } from '@storybook/react';
import { UiDesignSwitcher } from './UiDesignSwitcher';
import { StoreProviderDecorator } from '@/shared/config/storybook/StoreProviderDecorator';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';


const meta: Meta<typeof UiDesignSwitcher> = {
  title: 'Features/UiDesignSwitcher',
  component: UiDesignSwitcher,
  argTypes: {
    className: { control: 'color' },
  },
  args: {},
  decorators: [StoreProviderDecorator({})]
};

export default meta;
type Story = StoryObj<typeof UiDesignSwitcher>;


export const Primary: Story = {};
export const PrimaryRedesigned: Story = { decorators: [NewDesignDecorator] };