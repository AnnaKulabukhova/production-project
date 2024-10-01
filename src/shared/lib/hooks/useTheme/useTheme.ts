import { LOCAL_STORAGE_THEME_KEY } from '../../../const/localStorage'
import { useContext } from 'react'
import { Theme } from '../../../const/theme'
import { ThemeContext } from '../../context/ThemeContext'

export interface useThemeProps {
  toggleTheme: () => void
  theme: Theme
}

export const useTheme = (): useThemeProps => {
  const { theme, setTheme } = useContext(ThemeContext)

  const toggleTheme = () => {
    let newTheme: Theme
    switch (theme) {
      case Theme.Dark:
        newTheme = Theme.Light
        break
      case Theme.Light:
        newTheme = Theme.Blue
        break
      case Theme.Blue:
        newTheme = Theme.Dark
        break

      default: newTheme = Theme.Light
        break
    }

    setTheme?.(newTheme)
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
  }

  return {
    toggleTheme, theme: theme || Theme.Light
  }
}
