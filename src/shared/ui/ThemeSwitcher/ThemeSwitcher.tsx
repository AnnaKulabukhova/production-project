import { useTheme } from "app/providers/ThemeProvider"
import { Theme } from "app/providers/ThemeProvider"
import DarkIcon from 'shared/assets/icons/theme-dark.svg'
import LightIcon from 'shared/assets/icons/theme-light.svg'
import { classNames } from "shared/lib/classNames/classNames"
import classes from './ThemeSwitcher.module.scss'
import { Button, ThemeButton } from "../Button"

interface ThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher = ({className}: ThemeSwitcherProps) => {
    const {theme, toggleTheme} = useTheme()
     return (
        <Button theme={ThemeButton.Clear} className={classNames(classes.ThemeSwitcher, {}, [className])} onClick={toggleTheme}>
            {theme === Theme.Light ? <DarkIcon /> : <LightIcon />}
        </Button>
  )
}
