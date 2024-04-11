import { useTranslation } from 'react-i18next'
import classes from './LangSwitcher.module.scss'
import { Button, ThemeButton } from '../Button'
import { classNames } from 'shared/lib/classNames/classNames'
import { compileFunction } from 'vm'

interface LangSwitcherProps {
    className?: string
}

export const LangSwitcher = ({className} : LangSwitcherProps) => {
    const {t, i18n} = useTranslation()

    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    }

  return (
        <Button  
            className={classNames(classes.langSwitcher, {}, [className])}theme={ThemeButton.Clear}  
            onClick={toggle}
        >
            {t("Язык")}
        </Button>
)

}