import type { Preview } from '@storybook/react';
import { ThemeDecorator } from '../src/shared/config/storybook/ThemeDecorator';
import { Theme } from '../src/shared/const/theme';
import { RouterDecorator } from '../src/shared/config/storybook/RouterDecorator';
import { SuspenseDecorator } from '../src/shared/config/storybook/SuspenseDecorator';
import { FeaturesFlagsDecorator } from '@/shared/config/storybook/FeaturesFlagsDecorator/FeaturesFlagsDecorator';
import { I18nextDecorators } from '@/shared/config/storybook/I18nextDecorators';

export const globalTypes = {
  locale: {
    name: 'Locale',
    description: 'Internationalization locale',
    toolbar: {
      icon: 'globe',
      items: [
        { value: 'en', title: 'English' },
        { value: 'ru', title: 'Russian' },
      ],
      showName: true,
    },
  },
};

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: 'fullscreen',
    themes: {
      default: 'light',
      clearable: false,
    },
  },
  globals: { theme: Theme.Light, __IS_DEV__: true },
  decorators: [
    ThemeDecorator(Theme.Light),
    RouterDecorator,
    SuspenseDecorator,
    FeaturesFlagsDecorator({}),
    I18nextDecorators
  ],
};

export default preview;
