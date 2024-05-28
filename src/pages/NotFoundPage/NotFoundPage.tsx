import { useTranslation } from 'react-i18next'
import classes from './NotFoundPage.module.scss'
import { classNames } from "shared/lib/classNames/classNames"

interface NotFoundPageProps {
    className?: string
}

export const NotFoundPage = ({ className }: NotFoundPageProps) => {
    const { t } = useTranslation()
    return (
        <div className={classNames(classes.notFoundPage, {}, className ? [className] : [])} >
            {t('pageNotFound.title')}
        </div>
    )
}