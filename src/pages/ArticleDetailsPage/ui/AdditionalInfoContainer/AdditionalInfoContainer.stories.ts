import type { Meta, StoryObj } from '@storybook/react';
import { AdditionalInfoContainer } from './AdditionalInfoContainer';
import { StoreProviderDecorator } from '@/shared/config/storybook/StoreProviderDecorator';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';
import { type Article, ArticleType } from '@/entities/Article';
import ArticleIcon from '@/shared/assets/tests/articleImageTest.png'
import AvatarIcon from '@/shared/assets/tests/avatarForStorybook.jpg'

const article: Article = {
  id: '1',
  title: 'Javascript news',
  subtitle: 'Что нового в JS за 2022 год?',
  img: ArticleIcon,
  views: 1022,
  createdAt: '26.02.2022',
  type: [ArticleType.IT],
  user: {
    id: '1',
    username: 'Petya',
    avatar: AvatarIcon,
  },
  blocks: [],
};

const meta: Meta<typeof AdditionalInfoContainer> = {
  title: 'Pages/ArticleDetailsPage/AdditionalInfoContainer',
  component: AdditionalInfoContainer,
  argTypes: {
    className: { control: 'color' },
  },
  decorators: [NewDesignDecorator]
};

export default meta;
type Story = StoryObj<typeof AdditionalInfoContainer>;

export const LightWithComments: Story = {
  args: {
  },
  decorators: [StoreProviderDecorator({ articleDetails: { data: article } })],
};
