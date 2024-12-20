import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Card as CardDeprecated } from '@/shared/ui/deprecated/Card';
import { Card as CardRedesigned } from '@/shared/ui/redesigned/Card';
import { Skeleton as SkeletonDeprecated } from '@/shared/ui/deprecated/Skeleton';
import { Skeleton as SkeletonRedesigned } from '@/shared/ui/redesigned/Skeleton';
import { ArticlesViews } from '../../model/consts/articleConsts';
import classes from './ArticleListItem.module.scss';
import { ToggleFeatures, toggleFeatures } from '@/shared/lib/features';

interface ArticleListItemSkeletonProps {
  className?: string;
  view: ArticlesViews;
}

export const ArticleListItemSkeleton = memo(
  (props: ArticleListItemSkeletonProps) => {
    const { className, view } = props;

    const mainClass = toggleFeatures({
      name: 'isAppRedesigned',
      on: () => classes.articleListItemSkeletonRedesigned,
      off: () => classes.articleListItem,
    });

    const Skeleton = toggleFeatures({
      name: 'isAppRedesigned',
      on: () => SkeletonRedesigned,
      off: () => SkeletonDeprecated,
    });

    if (view === ArticlesViews.Big) {
      const cardContent = (
        <>
          <div className={classes.header}>
            <Skeleton border="50%" height={30} width={30} />
            <Skeleton
              width={150}
              height={16}
              className={classes.username}
            />
            <Skeleton
              width={150}
              height={16}
              className={classes.date}
            />
          </div>
          <Skeleton width={250} height={24} className={classes.title} />
          <Skeleton height={200} className={classes.img} />
          <div className={classes.footer}>
            <Skeleton height={36} width={200} />
          </div>
        </>
      );
      return (
        <div
          className={classNames(mainClass, {}, [
            className,
            classes[view],
          ])}
        >
          <ToggleFeatures
            feature="isAppRedesigned"
            on={
              <CardRedesigned border="32" className={classes.card}>
                {cardContent}
              </CardRedesigned>
            }
            off={
              <CardDeprecated className={classes.card}>
                {cardContent}
              </CardDeprecated>
            }
          />
        </div>
      );
    }

    const cardContent = (
      <>
        <ToggleFeatures
          feature="isAppRedesigned"
          on={
            <Skeleton
              width="100%"
              height={150}
              border="32px"
              className={classes.img}
            />
          }
          off={
            <div className={classes.imageWrapper}>
              <Skeleton
                width={200}
                height={200}
                className={classes.img}
              />
            </div>
          }
        />
        <div className={classes.infoWrapper}>
          <Skeleton width={130} height={16} />
        </div>
        <Skeleton width={150} height={16} className={classes.title} />
      </>
    );

    return (
      <div className={classNames(mainClass, {}, [className, classes[view]])}>
        <ToggleFeatures
          feature="isAppRedesigned"
          on={
            <CardRedesigned border="32" className={classes.card}>
              {cardContent}
            </CardRedesigned>
          }
          off={
            <CardDeprecated className={classes.card}>
              {cardContent}
            </CardDeprecated>
          }
        />
      </div>
    );
  },
);

