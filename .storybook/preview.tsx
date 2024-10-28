import type { Preview } from '@storybook/react';
import { ThemeDecorator } from '../src/shared/config/storybook/ThemeDecorator';
import { Theme } from '../src/shared/const/theme';
import { RouterDecorator } from '../src/shared/config/storybook/RouterDecorator';
import { SuspenseDecorator } from '../src/shared/config/storybook/SuspenseDecorator';
import { FeaturesFlagsDecorator } from '@/shared/config/storybook/FeaturesFlagsDecorator/FeaturesFlagsDecorator';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: 'fullscreen',
    // backgrounds: {
    //   values: [
    //     { name: 'light', value: '#f4f7fb' },
    //     { name: 'dark', value: '#3c5677' },
    //     { name: 'blue', value: '#24b2bc' },
    //     // { name: 'light', class: Theme.Light, color: 'f4f7fb' },
    //     // { name: 'dark', class: Theme.Dark, color: '#3c5677' },
    //     // { name: 'blue', class: Theme.Blue, color: '#24b2bc' }
    //   ],

    //   default: 'dark',
    // },
    themes: {
      default: 'light',
      clearable: false,
      list: [
        { name: 'light', class: ['app', Theme.Light], color: 'f4f7fb' },
        { name: 'dark', class: ['app', Theme.Dark], color: '#3c5677' },
        {
          name: 'blue',
          class: ['app', Theme.Blue],
          color: '#24b2bc',
        },
      ],
    },
  },
  globals: { theme: Theme.Light, __IS_DEV__: true },
  decorators: [ThemeDecorator(Theme.Light), RouterDecorator, SuspenseDecorator, FeaturesFlagsDecorator({})],
};

export default preview;
