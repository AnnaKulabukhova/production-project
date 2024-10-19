import classes from './ArticlesViewSelector.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import ListIconDeprecated from '@/shared/assets/icons/list.svg';
import ListIcon from '@/shared/assets/icons/list-new.svg';
import TiledIconDeprecated from '@/shared/assets/icons/tiled.svg';
import TiledIcon from '@/shared/assets/icons/tiled-new.svg';
import { Button as ButtonDeprecated, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { ArticlesViews } from '@/entities/Article';
import { ToggleFeatures, toggleFeatures } from '@/shared/lib/features';
import { Icon as IconDeprecated } from '@/shared/ui/deprecated/Icon';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { Card } from '@/shared/ui/redesigned/Card';
import { HStack } from '@/shared/ui/redesigned/Stack';

interface ArticlesViewSelectorProps {
  className?: string;
  view: ArticlesViews;
  onViewClick?: (view: ArticlesViews) => void;
}

const viewTypes = [
  {
    view: ArticlesViews.Small,
    icon: toggleFeatures({
      name: 'isAppRedesigned',
      off: () => TiledIconDeprecated,
      on: () => TiledIcon
    })
  },
  {
    view: ArticlesViews.Big,
    icon: toggleFeatures({
      name: 'isAppRedesigned',
      off: () => ListIconDeprecated,
      on: () => ListIcon
    })
  },
];

export const ArticlesViewSelector = ({ className, view, onViewClick }: ArticlesViewSelectorProps) => {
  const onClick = (newView: ArticlesViews) => {
    return () => {
      onViewClick?.(newView);
    };
  };

  return (
    <ToggleFeatures
      feature='isAppRedesigned'
      off={
        <div className={classNames(classes.articleViewSelector, {}, [className])}>
          {viewTypes.map((typeView) => (
            <ButtonDeprecated key={typeView.view} theme={ButtonTheme.Clear} onClick={onClick(typeView.view)}>
              <IconDeprecated
                className={classNames('', { [classes.notSelected]: typeView.view !== view }, [])}
                Svg={typeView.icon}
                width={24}
                height={24}
              />
            </ButtonDeprecated>
          ))}
        </div>
      }
      on={
        <Card
          className={classNames(classes.articleViewSelectorRedesigned, {}, [className])}
          padding='16'
          border='42'
        >
          <HStack gap='8'>
            {viewTypes.map((typeView) => (
              <Icon
                key={typeView.view}
                className={classNames('', { [classes.notSelected]: typeView.view !== view }, [])}
                Svg={typeView.icon}
                width={18}
                height={18}
                onClick={onClick(typeView.view)}
                clickable
              />
            ))}
          </HStack>
        </Card >
      }
    />
  );
};
