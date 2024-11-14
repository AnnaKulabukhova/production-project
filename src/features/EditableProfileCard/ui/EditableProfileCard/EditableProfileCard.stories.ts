import type { Meta, StoryObj } from '@storybook/react';
import { EditableProfileCard } from './EditableProfileCard';
import { StoreProviderDecorator } from '@/shared/config/storybook/StoreProviderDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

const meta: Meta<typeof EditableProfileCard> = {
  title: 'Features/EditableProfileCard/EditableProfileCard',
  component: EditableProfileCard,
  argTypes: {
    className: { control: 'color' },
  },
  args: {
    id: '1'
  },
  decorators: [StoreProviderDecorator({})],
};

export default meta;
type Story = StoryObj<typeof EditableProfileCard>;

export const Light: Story = {};

export const Dark: Story = {
  decorators: [ThemeDecorator(Theme.Dark)],
};
export const Blue: Story = {
  decorators: [ThemeDecorator(Theme.Blue)],
};
export const LightRedesigned: Story = { decorators: [NewDesignDecorator,] };

export const DarkRedesigned: Story = {
  decorators: [NewDesignDecorator, ThemeDecorator(Theme.Dark)],
};
export const BlueRedesigned: Story = {
  decorators: [NewDesignDecorator, ThemeDecorator(Theme.Blue)],
};
