import type { Meta, StoryObj } from '@storybook/react'
import ArticleRating from './ArticleRating'
import { StoreProviderDecorator } from '@/shared/config/storybook/StoreProviderDecorator'

const meta: Meta<typeof ArticleRating> = {
  component: ArticleRating,
  title: 'Features/ArticleRating',
  argTypes: {
    className: { control: 'color' }
  },
  args: {}
}

export default meta
type Story = StoryObj<typeof ArticleRating>

export const Primary: Story = {
  args: {
    articleId: '1'
  },
  decorators: [StoreProviderDecorator({
    user: {
      authData: { id: '1' }
    }
  })]
}

Primary.parameters = {
  layout: 'fullscreen',
  mockData: [
    {
      url: `${__API__}/article-ratings?userId=1&articleId=1`,
      method: 'GET',
      status: 200,
      response: [
        {
          rate: 4
        }
      ]
    }
  ]
}

export const WithoutRate: Story = {
  args: {
    articleId: '1'
  },
  decorators: [StoreProviderDecorator({
    user: {
      authData: { id: '1' }
    }
  })]
}

WithoutRate.parameters = {
  layout: 'fullscreen',
  mockData: [
    {
      url: `${__API__}/article-ratings?userId=1&articleId=1`,
      method: 'GET',
      status: 200,
      response: []
    }
  ]
}
