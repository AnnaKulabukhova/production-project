import type { Meta, StoryObj } from '@storybook/react';
import { ScrollToolbar } from './ScrollToolbar';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { PositionDecorator } from '@/shared/config/storybook/PositionDecorator';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

const meta: Meta<typeof ScrollToolbar> = {
  title: 'Widgets/ScrollToolbar',
  component: ScrollToolbar,
  argTypes: {
    className: { control: 'color' },
  },
  decorators: [PositionDecorator]
};

export default meta;
type Story = StoryObj<typeof ScrollToolbar>;

export const Light: Story = {};

export const Dark: Story = {
  decorators: [NewDesignDecorator, ThemeDecorator(Theme.Dark)],
};
export const Blue: Story = {
  decorators: [NewDesignDecorator, ThemeDecorator(Theme.Blue)],
};
