import { useEffect, useMemo, useState } from 'react';
import type { ReactNode } from 'react';
import { ThemeContext } from '@/shared/lib/context/ThemeContext';
import { Theme } from '@/shared/const/theme';
import { LOCAL_STORAGE_THEME_KEY } from '@/shared/const/localStorage';

interface ThemeProviderProps {
  initialTheme?: Theme;
  children: ReactNode;
}

const fallbackTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme

const ThemeProvider = ({ children, initialTheme }: ThemeProviderProps) => {

  const [isThemeInit, setIsThemeInit] = useState(false)

  const [theme, setTheme] = useState<Theme>(initialTheme ?? fallbackTheme ?? Theme.Light);

  useEffect(() => {
    if (!isThemeInit && initialTheme) {
      setTheme(initialTheme)
      setIsThemeInit(true)

    }
  }, [initialTheme, isThemeInit])

  useEffect(() => {
    document.body.className = theme
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, theme)
  }, [theme])

  const defaultProps = useMemo(() => ({ theme, setTheme }), [theme]);

  return <ThemeContext.Provider value={defaultProps}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
