import type { Preview } from "@storybook/react";
import { ThemeDecorator } from '../src/shared/config/storybook/ThemeDecorator'
import { Theme } from "../src/app/providers/ThemeProvider/lib/ThemeContext";
import { RouterDecorator } from '../src/shared/config/storybook/RouterDecorator'


const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  globals: { theme: Theme.Light },
  decorators: [ThemeDecorator(Theme.Light), RouterDecorator],
};

export default preview;
