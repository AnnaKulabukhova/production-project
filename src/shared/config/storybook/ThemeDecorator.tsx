import { Decorator } from '@storybook/react';
import { Theme, ThemeContext } from '../../../app/providers/ThemeProvider/lib/ThemeContext'
import '../../../app/styles/index.scss'
import ThemeProvider from '../../../app/providers/ThemeProvider/ui/ThemeProvider';


export const ThemeDecorator: (theme: Theme) => Decorator = (theme) => (Story, context) => {
  const defaultTheme = theme || context.globals.theme;


  return (
    <ThemeProvider >
      <ThemeContext.Provider value={defaultTheme}>
        <div className={`app ${defaultTheme}`}>
          <Story />
        </div>
      </ThemeContext.Provider>
    </ThemeProvider>
  );
};