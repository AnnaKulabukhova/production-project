import type { Meta, StoryObj } from '@storybook/react'
import { AvatarDropdown } from './AvatarDropdown'
import { StoreProviderDecorator } from '@/shared/config/storybook/StoreProviderDecorator'
import { UserRole } from '@/entities/User'

const meta: Meta<typeof AvatarDropdown> = {
  title: 'Features/AvatarDropdown',
  component: AvatarDropdown,
  argTypes: {
    className: { control: 'color' }
  },
  args: {}
}

export default meta
type Story = StoryObj<typeof AvatarDropdown>

export const forAdmin: Story = {
  decorators: [StoreProviderDecorator({ user: { authData: { id: '1', username: 'admin', roles: [UserRole.admin] } } })]
}
export const forUser: Story = {
  decorators: [StoreProviderDecorator({ user: { authData: { id: '1', username: 'manager', roles: [UserRole.user] } } })]
}
