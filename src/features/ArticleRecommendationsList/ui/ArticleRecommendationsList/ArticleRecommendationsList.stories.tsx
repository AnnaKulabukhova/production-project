import type { Meta, StoryObj } from '@storybook/react'
import { ArticleRecommendationsList } from './ArticleRecommendationsList'
import { StoreProviderDecorator } from '@/shared/config/storybook/StoreProviderDecorator'
import type { Article } from '@/entities/Article'

const article: Article = {
  id: '1',
  blocks: [],
  createdAt: '',
  img: '',
  subtitle: 'fsd',
  title: 'Article',
  type: [],
  user: { id: '1', username: 'user' },
  views: 456
}

const meta: Meta<typeof ArticleRecommendationsList> = {
  title: 'Features/ArticleRecommendationsList',
  component: ArticleRecommendationsList,
  parameters: {
    mockData: [
      {
        url: `${__API__}/articles?_limit=3`,
        method: 'GET',
        status: 200,
        response: [
          { ...article, id: 1 },
          { ...article, id: 2 },
          { ...article, id: 3 }
        ]
      }
    ]
  },
  argTypes: {
    className: { control: 'color' }
  },
  args: {},
  decorators: [StoreProviderDecorator({})]
}

export default meta
type Story = StoryObj<typeof ArticleRecommendationsList>

export const Primary: Story = {
  args: {
  }
}
