import { memo } from 'react';
import classes from './ArticleCodeBlockComponent.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import type { ArticleCodeBlock } from '../../model/types/article';
import { Code } from '@/shared/ui/redesigned/Code';

interface ArticleCodeBlockComponentProps {
  className?: string;
  block: ArticleCodeBlock;
}

export const ArticleCodeBlockComponent = memo(({ className, block }: ArticleCodeBlockComponentProps) => {
  return (
    <div className={classNames(classes.articleCodeblockComponent, {}, [className])}>
      <Code text={block.code} />
    </div>
  );
});
