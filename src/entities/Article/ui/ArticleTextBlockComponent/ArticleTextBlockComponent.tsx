import { memo } from 'react';
import classes from './ArticleTextBlockComponent.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import type { ArticleTextBlock } from '../../model/types/article';
import { Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { Text } from '@/shared/ui/redesigned/Text';
import { ToggleFeatures } from '@/shared/lib/features';

interface ArticleTextBlockComponentProps {
  className?: string;
  block: ArticleTextBlock;
}

export const ArticleTextBlockComponent = memo(({ className, block }: ArticleTextBlockComponentProps) => {
  return (
    <div className={classNames(classes.articleTextBlockComponent, {}, [className])}>
      {block.title &&
        <ToggleFeatures
          feature='isAppRedesigned'
          off={<TextDeprecated title={block.title} className={classes.title} />}
          on={<Text title={block.title} className={classes.title} />}
        />
      }
      {block.paragraphs.map((text) => (
        <ToggleFeatures
          key={text}
          feature='isAppRedesigned'
          off={<TextDeprecated text={text} className={classes.text} />}
          on={<Text key={text} text={text} className={classes.text} />}
        />
      ))}
    </div>
  );
});
