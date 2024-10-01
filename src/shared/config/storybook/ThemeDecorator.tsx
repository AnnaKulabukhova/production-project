import type { Decorator } from '@storybook/react'
import { ThemeProvider } from '@/app/providers/ThemeProvider'
import '@/app/styles/index.scss'
import type { Theme } from '@/shared/const/theme'

export const ThemeDecorator: (theme: Theme) => Decorator = (theme) => (Story, context) => {
  const defaultTheme = theme || context.globals.theme

  return (
    <ThemeProvider initialTheme={theme}>
      <div className={`app ${defaultTheme}`}>
        <Story />
      </div>
    </ThemeProvider>
  )
}
