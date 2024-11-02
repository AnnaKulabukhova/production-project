import type { Meta, StoryObj } from '@storybook/react';
import { RatingCard } from './RatingCard';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

const meta: Meta<typeof RatingCard> = {
  title: 'Entities/RatingCard',
  component: RatingCard,
  argTypes: {
    className: { control: 'color' },
  },
  args: {},
};

export default meta;
type Story = StoryObj<typeof RatingCard>;

export const WithRateDeprecated: Story = {
  args: {
    rate: 2,
  },
};

export const WithoutRateDeprecated: Story = {
  args: {
    title: 'Review',
  },
};

export const WithRateRedesigned: Story = {
  args: {
    rate: 3,
  },
  decorators: [NewDesignDecorator]
};

export const WithoutRateRedesigned: Story = {
  args: {
    title: 'Review',
  },
  decorators: [NewDesignDecorator]
};
