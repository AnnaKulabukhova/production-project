import { useTranslation } from 'react-i18next'
import { Button, ThemeButton } from '../Button'
import { classNames } from 'shared/lib/classNames/classNames'

interface LangSwitcherProps {
	className?: string
}

export const LangSwitcher = ({ className }: LangSwitcherProps) => {
	const { t, i18n } = useTranslation()

	const toggle = () => {
		i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
	}

	return (
		<Button
			className={classNames('', {}, [className])} theme={ThemeButton.Clear}
			onClick={toggle}
		>
			{t("Язык")}
		</Button>
	)

}