import type { Meta, StoryObj } from '@storybook/react'
import ArticleEditPage from './ArticleEditPage'
import { StoreProviderDecorator } from '@/shared/config/storybook/StoreProviderDecorator'

const meta: Meta<typeof ArticleEditPage> = {
  title: 'Pages/ArticleEditPage',
  component: ArticleEditPage,
  argTypes: {
    className: { control: 'color' }
  },
  args: {},
  decorators: [StoreProviderDecorator({})]
}

export default meta
type Story = StoryObj<typeof ArticleEditPage>

export const Primary: Story = {
  args: {
  }
}
