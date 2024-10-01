import type { Meta, StoryObj } from '@storybook/react'
import { ArticleDetailsComments } from './ArticleDetailsComments'
import { StoreProviderDecorator } from '@/shared/config/storybook/StoreProviderDecorator'

const comments = {
  0: {
    id: '1',
    text: 'some comment',
    user: { id: '1', username: 'admin' }
  },
  1: {
    id: '2',
    text: 'some comment 2',
    user: { id: '1', username: 'admin' }

  },
  2: {
    id: '3',
    text: 'some comment 3',
    user: { id: '1', username: 'admin' }
  }
}

const meta: Meta<typeof ArticleDetailsComments> = {
  title: 'Pages/ArticleDetailsPage/ArticleDetailsComments',
  component: ArticleDetailsComments,
  argTypes: {
    className: { control: 'color' }
  }
}

export default meta
type Story = StoryObj<typeof ArticleDetailsComments>

export const LightWithComments: Story = {
  args: {
    id: '1'
  },
  decorators: [StoreProviderDecorator({ articleDetailsPage: { comments: { ids: ['0', '1', '2'], entities: comments } } })]
}
export const DarkWithoutComments: Story = {
  args: {
    id: '1'
  },
  decorators: [StoreProviderDecorator({ articleDetailsPage: {} })]
}
