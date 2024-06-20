import { useTranslation } from 'react-i18next'
import { Button, ButtonTheme } from '../Button'
import { classNames } from 'shared/lib/classNames/classNames'
import { memo } from 'react'

interface LangSwitcherProps {
	className?: string
	short?: boolean
}

export const LangSwitcher = memo(({ className, short }: LangSwitcherProps) => {
	const { t, i18n } = useTranslation()

	const toggle = () => {
		i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
	}

	return (
		<Button
			className={classNames('', {}, className ? [className] : [])} theme={ButtonTheme.Clear}
			onClick={toggle}
		>
			{t(short ? "short" : "long")}
		</Button>
	)

})