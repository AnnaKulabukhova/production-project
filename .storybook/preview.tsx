import type { Preview } from "@storybook/react";
import { ThemeDecorator } from '../src/shared/config/storybook/ThemeDecorator'
import { Theme } from "../src/app/providers/ThemeProvider/lib/ThemeContext";
import { RouterDecorator } from '../src/shared/config/storybook/RouterDecorator'
import { StoreProviderDecorator } from '../src/shared/config/storybook/StoreProviderDecorator'


const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  globals: { theme: Theme.Light, __IS_DEV__: true },
  decorators: [ThemeDecorator(Theme.Light), RouterDecorator, StoreProviderDecorator],
};

export default preview;
