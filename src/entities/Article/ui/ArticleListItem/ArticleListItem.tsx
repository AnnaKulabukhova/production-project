import { memo } from 'react';
import type { HTMLAttributeAnchorTarget } from 'react';
import type { Article } from '../../model/types/article';
import type { ArticlesViews } from '@/entities/Article/model/consts/articleConsts';
import { ToggleFeatures } from '@/shared/lib/features';
import { ArticleListItemDeprecated } from './ArticleListItemDeprecated/ArticleListItemDeprecated';
import { ArticleListItemRedesigned } from './ArticleListItemRedesigned/ArticleListItemRedesigned';

export interface ArticleListItemProps {
  className?: string;
  article: Article;
  view?: ArticlesViews;
  target?: HTMLAttributeAnchorTarget;
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {

  return (
    <ToggleFeatures
      feature='isAppRedesigned'
      off={<ArticleListItemDeprecated {...props} />}
      on={<ArticleListItemRedesigned {...props} />}
    />
  );
});
