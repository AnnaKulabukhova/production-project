import { ArticlesViews } from '../..//model/types/article'
import classes from './ArticlesViewSelector.module.scss'
import { classNames } from "shared/lib/classNames/classNames"
import ListIcon from 'shared/assets/icons/list.svg'
import TiledIcon from 'shared/assets/icons/tiled.svg'
import { Button, ButtonTheme } from 'shared/ui/Button'
import { Icon } from 'shared/ui/Icon'

interface ArticlesViewSelectorProps {
  className?: string
  view: ArticlesViews
  onViewClick?: (view: ArticlesViews) => void
}

const viewTypes = [
  {
    view: ArticlesViews.Small,
    icon: TiledIcon
  },
  {
    view: ArticlesViews.Big,
    icon: ListIcon
  },
]

export const ArticlesViewSelector = ({ className, view, onViewClick }: ArticlesViewSelectorProps) => {

  const onClick = (newView: ArticlesViews) => {
    return () => {
      onViewClick?.(newView)
    }
  }

  return (
    <div className={classNames('', {}, [className])} >
      {viewTypes.map(typeView => (
        <Button theme={ButtonTheme.Clear} onClick={onClick(typeView.view)}>
          <Icon className={classNames('', { [classes.notSelected]: typeView.view !== view }, [])} Svg={typeView.icon} />
        </Button>
      ))}
    </div>
  )
}