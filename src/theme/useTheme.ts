import { useContext } from "react"
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from "./ThemeContext"

export interface useThemeProps {
    toggleTheme: () => void;
    theme: Theme
}

export const useTheme = ():useThemeProps  => {
    const {theme, setTheme} = useContext(ThemeContext)

    const toggleTheme = () => {
    const newTheme = theme === 'light' ? Theme.Dark : Theme.Light

      setTheme(newTheme)
      localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
      console.log(localStorage);
      
    }

    return {
        toggleTheme, theme
    }
}