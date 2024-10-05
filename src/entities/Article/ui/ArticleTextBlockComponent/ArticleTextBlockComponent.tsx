import { memo } from 'react';
import classes from './ArticleTextBlockComponent.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Text } from '@/shared/ui/Text/Text';
import type { ArticleTextBlock } from '../../model/types/article';

interface ArticleTextBlockComponentProps {
  className?: string;
  block: ArticleTextBlock;
}

export const ArticleTextBlockComponent = memo(({ className, block }: ArticleTextBlockComponentProps) => {
  return (
    <div className={classNames(classes.articleTextBlockComponent, {}, [className])}>
      {block.title && <Text title={block.title} className={classes.title} />}
      {block.paragraphs.map((text) => (
        <Text key={text} text={text} className={classes.text} />
      ))}
    </div>
  );
});
