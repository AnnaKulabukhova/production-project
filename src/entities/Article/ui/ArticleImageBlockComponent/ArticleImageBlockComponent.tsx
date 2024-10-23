import { memo } from 'react';
import classes from './ArticleImageBlockComponent.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import type { ArticleImageBlock } from '../../model/types/article';
import { TextAlign, Text as TextDeprecated } from '@/shared/ui/deprecated/Text';
import { Text } from '@/shared/ui/redesigned/Text';
import { ToggleFeatures } from '@/shared/lib/features';

interface ArticleImageBlockComponentProps {
  className?: string;
  block: ArticleImageBlock;
}

export const ArticleImageBlockComponent = memo(({ className, block }: ArticleImageBlockComponentProps) => {
  return (
    <div className={classNames(classes.articleimageblockcomponent, {}, [className])}>
      <img className={classes.img} src={block.src} alt={block.title} />
      {block.title &&
        <ToggleFeatures
          feature='isAppRedesigned'
          off={<TextDeprecated title={block.title} className={classes.title} align={TextAlign.Center} />}
          on={<Text text={block.title} className={classes.title} align='center' />}
        />
      }
    </div>
  );
});
