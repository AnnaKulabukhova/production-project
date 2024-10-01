import type { Meta, StoryObj } from '@storybook/react'
import { NotificationButton } from './NotificationButton'
import { StoreProviderDecorator } from '@/shared/config/storybook/StoreProviderDecorator'
// import { BackgroundDecorator } from '@/shared/config/storybook/BackgroundDecorator'

const parameters = {
  layout: 'fullscreen',
  mockData: [
    {
      url: `${__API__}/notifications`,
      method: 'GET',
      status: 200,
      response: [
        {
          id: '1',
          title: 'Title',
          description: 'description description description description description'
        },
        {
          id: '2',
          title: 'Title 2',
          description: 'description description description description description'

        },
        {
          id: '3',
          title: 'Title3',
          description: 'description description description description description'

        }
      ]
    }
  ]
}

const meta: Meta<typeof NotificationButton> = {
  title: 'Features/NotificationButton',
  parameters,
  component: NotificationButton,
  argTypes: {
    className: { control: 'color' }
  },
  args: {},
  decorators: [StoreProviderDecorator({})]
}

export default meta
type Story = StoryObj<typeof NotificationButton>

export const Light: Story = {
  // decorators: [BackgroundDecorator({})]
}
