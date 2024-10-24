import { useEffect, useMemo, useState } from 'react';
import type { ReactNode } from 'react';
import { ThemeContext } from '@/shared/lib/context/ThemeContext';
import { Theme } from '@/shared/const/theme';
import { useJsonSettings } from '@/entities/User';

interface ThemeProviderProps {
  initialTheme?: Theme;
  children: ReactNode;
}

const ThemeProvider = ({ children, initialTheme }: ThemeProviderProps) => {
  const { theme: defaultTheme } = useJsonSettings()
  const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme || Theme.Light);
  const [isThemeInit, setIsThemeInit] = useState(false)

  useEffect(() => {
    if (!isThemeInit && defaultTheme) {
      setTheme(defaultTheme)
      setIsThemeInit(true)

    }
  }, [defaultTheme, isThemeInit])

  useEffect(() => {
    document.body.className = theme
  }, [theme])

  const defaultProps = useMemo(() => ({ theme, setTheme }), [theme]);

  return <ThemeContext.Provider value={defaultProps}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
