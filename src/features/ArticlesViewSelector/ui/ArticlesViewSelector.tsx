import classes from './ArticlesViewSelector.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import ListIcon from '@/shared/assets/icons/list.svg';
import TiledIcon from '@/shared/assets/icons/tiled.svg';
import { Button, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { Icon } from '@/shared/ui/deprecated/Icon';
import { ArticlesViews } from '@/entities/Article';

interface ArticlesViewSelectorProps {
  className?: string;
  view: ArticlesViews;
  onViewClick?: (view: ArticlesViews) => void;
}

const viewTypes = [
  {
    view: ArticlesViews.Small,
    icon: TiledIcon,
  },
  {
    view: ArticlesViews.Big,
    icon: ListIcon,
  },
];

export const ArticlesViewSelector = ({ className, view, onViewClick }: ArticlesViewSelectorProps) => {
  const onClick = (newView: ArticlesViews) => {
    return () => {
      onViewClick?.(newView);
    };
  };

  return (
    <div className={classNames('', {}, [className])}>
      {viewTypes.map((typeView) => (
        <Button key={typeView.view} theme={ButtonTheme.Clear} onClick={onClick(typeView.view)}>
          <Icon
            className={classNames('', { [classes.notSelected]: typeView.view !== view }, [])}
            Svg={typeView.icon}
            width={24}
            height={24}
          />
        </Button>
      ))}
    </div>
  );
};
