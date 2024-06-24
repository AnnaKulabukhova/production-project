import type { Meta, StoryObj } from '@storybook/react';
import { ProfileCard } from './ProfileCard';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider/lib';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import AvatarImg from 'shared/assets/tests/avatarForStorybook.jpg'


const data = {
  first: 'Leanne',
  lastName: 'Graham',
  age: 18,
  currency: Currency.RUB,
  country: Country.Russia,
  city: 'Moscow',
  username: 'admin',
  avatar: AvatarImg
}

const meta: Meta<typeof ProfileCard> = {
  title: 'Entities/ProfileCard',
  component: ProfileCard,
  argTypes: {
    className: { control: 'color' },
  },
};

export default meta;
type Story = StoryObj<typeof ProfileCard>;


export const Light: Story = {
  args: {
    data: data
  }
};
export const Loading: Story = {
  args: {
    isLoading: true
  }
};
export const Error: Story = {
  args: {
    error: 'Error'
  }
};

export const Dark: Story = {
  args: {
    data: data
  },
  decorators: [ThemeDecorator(Theme.Dark)]
};