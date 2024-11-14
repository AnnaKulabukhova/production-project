import { useContext } from 'react';
import { Theme } from '../../../const/theme';
import { ThemeContext } from '../../context/ThemeContext';

export interface UseThemeResult {
  toggleTheme: (saveAction?: (theme: Theme) => void) => void;
  theme: Theme;
}

export const useTheme = (): UseThemeResult => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = (saveAction?: (theme: Theme) => void) => {
    let newTheme: Theme;
    switch (theme) {
      case Theme.Dark:
        newTheme = Theme.Light;
        break;
      case Theme.Light:
        newTheme = Theme.Blue;
        break;
      case Theme.Blue:
        newTheme = Theme.Dark;
        break;

      default:
        newTheme = Theme.Light;
        break;
    }

    setTheme?.(newTheme);
    saveAction?.(newTheme)
  };

  return {
    toggleTheme,
    theme: theme ?? Theme.Light,
  };
};

