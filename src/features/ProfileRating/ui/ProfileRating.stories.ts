import type { Meta, StoryObj } from '@storybook/react';
import { ProfileRating } from './ProfileRating';
import { StoreProviderDecorator } from '@/shared/config/storybook/StoreProviderDecorator';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

const meta: Meta<typeof ProfileRating> = {
  component: ProfileRating,
  title: 'Features/ProfileRating',
  argTypes: {
    className: { control: 'color' },
  },
  args: {},
};

export default meta;
type Story = StoryObj<typeof ProfileRating>;

export const WithRate: Story = {
  args: {
    profileId: '1',
  },
  decorators: [
    StoreProviderDecorator({
      user: {
        authData: { id: '1' },
      },
    }),
  ],
};

WithRate.parameters = {
  layout: 'fullscreen',
  mockData: [
    {
      url: `${__API__}/profile-ratings?userId=1&profileId=1`,
      method: 'GET',
      status: 200,
      response: [
        {
          rate: 4,
        },
      ],
    },
  ],
};

export const WithoutRate: Story = {
  args: {
    profileId: '1',
  },
  decorators: [
    StoreProviderDecorator({
      user: {
        authData: { id: '1' },
      },
    }),
  ],
};

WithoutRate.parameters = {
  layout: 'fullscreen',
  mockData: [
    {
      url: `${__API__}/profile-ratings?userId=1&profileId=1`,
      method: 'GET',
      status: 200,
      response: [],
    },
  ],
};


export const WithRateRedesigned: Story = {
  args: {
    profileId: '1',
  },
  decorators: [
    NewDesignDecorator,
    StoreProviderDecorator({
      user: {
        authData: { id: '1' },
      },
    }),
  ],
};

WithRateRedesigned.parameters = {
  layout: 'fullscreen',
  mockData: [
    {
      url: `${__API__}/profile-ratings?userId=1&profileId=1`,
      method: 'GET',
      status: 200,
      response: [
        {
          rate: 4,
        },
      ],
    },
  ],
};

export const WithoutRateRedesigned: Story = {
  args: {
    profileId: '1',
  },
  decorators: [
    NewDesignDecorator,
    StoreProviderDecorator({
      user: {
        authData: { id: '1' },
      },
    }),
  ],
};

WithoutRateRedesigned.parameters = {
  layout: 'fullscreen',
  mockData: [
    {
      url: `${__API__}/profile-ratings?userId=1&profileId=1`,
      method: 'GET',
      status: 200,
      response: [],
    },
  ],
};