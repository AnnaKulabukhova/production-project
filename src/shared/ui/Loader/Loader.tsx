import classes from './Loader.module.scss'
import { classNames } from "shared/lib/classNames/classNames"

interface LoaderProps {
	className?: string
}

export const Loader = ({ className }: LoaderProps) => {
	return (
		<div className={classNames(classes.loader, {}, [className])} >
		</div>
	)
}