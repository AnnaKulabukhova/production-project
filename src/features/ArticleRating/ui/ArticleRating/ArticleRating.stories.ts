import type { Meta, StoryObj } from '@storybook/react';
import ArticleRating from './ArticleRating';
import { StoreProviderDecorator } from '@/shared/config/storybook/StoreProviderDecorator';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

const meta: Meta<typeof ArticleRating> = {
  component: ArticleRating,
  title: 'Features/ArticleRating',
  argTypes: {
    className: { control: 'color' },
  },
  args: {},
};

export default meta;
type Story = StoryObj<typeof ArticleRating>;

export const WithRate: Story = {
  args: {
    articleId: '1',
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
      url: `${__API__}/article-ratings?userId=1&articleId=1`,
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
    articleId: '1',
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
      url: `${__API__}/article-ratings?userId=1&articleId=1`,
      method: 'GET',
      status: 200,
      response: [],
    },
  ],
};


export const WithRateRedesigned: Story = {
  args: {
    articleId: '1',
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
      url: `${__API__}/article-ratings?userId=1&articleId=1`,
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
    articleId: '1',
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
      url: `${__API__}/article-ratings?userId=1&articleId=1`,
      method: 'GET',
      status: 200,
      response: [],
    },
  ],
};