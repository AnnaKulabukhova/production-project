import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { ScrollToTopButton } from './ScrollToTopButton';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

const meta: Meta<typeof ScrollToTopButton> = {
  title: 'Features/ScrollToTopButton',
  component: ScrollToTopButton,
  argTypes: {
    className: { control: 'color' },
  },
  decorators: [NewDesignDecorator],
};

export default meta;
type Story = StoryObj<typeof ScrollToTopButton>;

export const Light: Story = {};

export const Dark: Story = {
  decorators: [NewDesignDecorator, ThemeDecorator(Theme.Dark)],
};
export const Blue: Story = {
  decorators: [NewDesignDecorator, ThemeDecorator(Theme.Blue)],
};

