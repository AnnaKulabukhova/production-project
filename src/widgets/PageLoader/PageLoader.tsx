import { Loader } from 'shared/ui/Loader'
import classes from './PageLoader.module.scss'
import { classNames } from "shared/lib/classNames/classNames"
import { useTranslation } from 'react-i18next'

interface PageLoaderProps {
	className?: string
}

export const PageLoader = ({ className }: PageLoaderProps) => {
	const { t } = useTranslation()
	return (
		<div className={classNames(classes.pageLoader, {}, className ? [className] : [])} >
			<div className={classes.text}> {t('Загрузка')} </div>
			<Loader />
		</div>
	)
}