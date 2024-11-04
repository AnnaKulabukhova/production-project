import type { Meta, StoryObj } from '@storybook/react';
import { Navbar } from './Navbar';
import { ThemeDecorator } from '../../shared/config/storybook/ThemeDecorator';
import { StoreProviderDecorator } from '@/shared/config/storybook/StoreProviderDecorator';
import { Theme } from '@/shared/const/theme';
import TestAvatar from '@/shared/assets/tests/avatarForStorybook.jpg'
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

const meta: Meta<typeof Navbar> = {
  title: 'Widgets/Navbar',
  component: Navbar,
  argTypes: {
    className: { control: 'color' },
  },
};

export default meta;
type Story = StoryObj<typeof Navbar>;

export const Light: Story = {
  decorators: [
    StoreProviderDecorator({
      user: {
        authData: {
          username: 'dgg',
          id: '5',
          avatar: TestAvatar,
        },
      },
    }),
  ],
};

export const Dark: Story = {
  decorators: [
    ThemeDecorator(Theme.Dark),
    StoreProviderDecorator({
      user: {
        authData: {
          username: 'dgg',
          id: '5',
          avatar: TestAvatar,
        },
      },
    }),
  ],
};

export const AuthNavbar: Story = {
  decorators: [StoreProviderDecorator({ user: { authData: undefined } })],
};
export const LightRedesigned: Story = {
  decorators: [
    NewDesignDecorator,
    StoreProviderDecorator({
      user: {
        authData: {
          username: 'dgg',
          id: '5',
          avatar: TestAvatar,
        },
      },
    }),

  ],
};

export const DarkRedesigned: Story = {
  decorators: [
    NewDesignDecorator,
    ThemeDecorator(Theme.Dark),
    StoreProviderDecorator({
      user: {
        authData: {
          username: 'dgg',
          id: '5',
          avatar: TestAvatar,
        },
      },
    }),
  ],
};
export const BlueRedesigned: Story = {
  decorators: [
    NewDesignDecorator,
    ThemeDecorator(Theme.Blue),
    StoreProviderDecorator({
      user: {
        authData: {
          username: 'dgg',
          id: '5',
          avatar: TestAvatar,
        },
      },
    }),
  ],
};

export const AuthNavbarRedesigned: Story = {
  decorators: [StoreProviderDecorator({ user: { authData: undefined } }), NewDesignDecorator],
};
