import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from './Modal';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/const/theme';
import { NewDesignDecorator } from '@/shared/config/storybook/NewDesignDecorator/NewDesignDecorator';

const meta: Meta<typeof Modal> = {
  title: 'Shared/Modal',
  component: Modal,
  argTypes: {
    className: { control: 'color' },
  },
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Primary: Story = {
  args: {
    isOpen: true,
    children:
      'Чтобы обойти эту проблему, react-screenshot-test по умолчанию будет запущен Puppeteer (т. е. Chrome) внутри Docker, чтобы делать снимки экрана ваших компонентов. Это гарантирует, что создаваемые снимки экрана будут единообразными независимо от того, на какой платформе вы запускаете тесты.',
  },
  decorators: [],
};

export const Dark: Story = {
  args: {
    isOpen: true,
    children:
      'Чтобы обойти эту проблему, react-screenshot-test по умолчанию будет запущен Puppeteer (т. е. Chrome) внутри Docker, чтобы делать снимки экрана ваших компонентов. Это гарантирует, что создаваемые снимки экрана будут единообразными независимо от того, на какой платформе вы запускаете тесты.',
  },
  decorators: [ThemeDecorator(Theme.Dark)],
};
export const PrimaryRedesigned: Story = {
  args: {
    isOpen: true,
    children:
      'Чтобы обойти эту проблему, react-screenshot-test по умолчанию будет запущен Puppeteer (т. е. Chrome) внутри Docker, чтобы делать снимки экрана ваших компонентов. Это гарантирует, что создаваемые снимки экрана будут единообразными независимо от того, на какой платформе вы запускаете тесты.',
  },
  decorators: [NewDesignDecorator],
};

export const DarkRedesigned: Story = {
  args: {
    isOpen: true,
    children:
      'Чтобы обойти эту проблему, react-screenshot-test по умолчанию будет запущен Puppeteer (т. е. Chrome) внутри Docker, чтобы делать снимки экрана ваших компонентов. Это гарантирует, что создаваемые снимки экрана будут единообразными независимо от того, на какой платформе вы запускаете тесты.',
  },
  decorators: [NewDesignDecorator, ThemeDecorator(Theme.Dark)],
};
export const BlueRedesigned: Story = {
  args: {
    isOpen: true,
    children:
      'Чтобы обойти эту проблему, react-screenshot-test по умолчанию будет запущен Puppeteer (т. е. Chrome) внутри Docker, чтобы делать снимки экрана ваших компонентов. Это гарантирует, что создаваемые снимки экрана будут единообразными независимо от того, на какой платформе вы запускаете тесты.',
  },
  decorators: [NewDesignDecorator, ThemeDecorator(Theme.Blue)],
};
