import { memo } from 'react'
import classes from './ArticleListItem.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { ArticlesViews } from '../../model/consts/articleConsts'
import { Card } from '@/shared/ui/Card'
import { Skeleton } from '@/shared/ui/Skeleton'

interface ArticleListItemSkeletonProps {
  className?: string
  view?: ArticlesViews
}

export const ArticleListItemSkeleton = memo(({ className, view = ArticlesViews.Small }: ArticleListItemSkeletonProps) => {
  return (
    <>
      {view === ArticlesViews.Big
        ? (
          <div className={classNames('', {}, [className, classes[view]])}>
            <Card>
              <div className={classes.header}>
                <Skeleton height={35} width={35} border={'50%'} className={classes.avatar} />
                <Skeleton height={16} width={146} />
                <Skeleton height={16} width={109} className={classes.date} />
              </div>
              <Skeleton height={24} width={495} className={classes.title} />
              <div className={classes.typesForSkeleton}>
                <Skeleton height={16} width={50} />
                <Skeleton height={16} width={50} />
              </div>
              <Skeleton height={178} width={815} className={classes.image} />
              <Skeleton height={56} width={770} className={classes.textForSkeleton} />
              <Skeleton height={35} width={770} />
              <div className={classes.footer}>
                <Skeleton height={32} width={100} />
              </div>
            </Card>
          </div>)
        : (<div className={classNames('', {}, [className, classes[view]])}>
          <Card >
            <div className={classes.imageWrapper}>
              <Skeleton height={200} width={200} className={classes.image} />
            </div>
            <div className={classes.infoWrapper}>
              <Skeleton height={16} width={130} />
            </div>
            <Skeleton height={16} width={150} className={classes.title} />
          </Card>
        </div>)
      }
    </>
  )
})
