import { useTheme } from "app/providers/ThemeProvider/lib"
import { Theme } from "app/providers/ThemeProvider/lib"
import DarkIcon from 'shared/assets/icons/theme-dark.svg'
import LightIcon from 'shared/assets/icons/theme-light.svg'
import { classNames } from "shared/lib/classNames/classNames"
import { Button, ThemeButton } from "../Button"

interface ThemeSwitcherProps {
	className?: string
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
	const { theme, toggleTheme } = useTheme()
	return (
		<Button theme={ThemeButton.Clear} className={classNames('', {}, [className])} onClick={toggleTheme}>
			{theme === Theme.Light ? <DarkIcon /> : <LightIcon />}
		</Button>
	)
}
