import { memo } from 'react';
import classes from './Text.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';

export enum TextTheme {
  Primary = 'primary',
  Secondary = 'secondary',
  Error = 'error',
}

export enum TextSize {
  SizeS = 'sizeS',
  SizeM = 'sizeM',
  SizeL = 'sizeL',
}

export enum TextAlign {
  Left = 'left',
  Right = 'right',
  Center = 'center',
}

interface TextProps {
  text?: string;
  className?: string;
  title?: string;
  theme?: TextTheme;
  align?: TextAlign;
  size?: TextSize;
  'data-testid'?: string;
}

type HeaderTagType = 'h1' | 'h2' | 'h3';

const mapSizeToHeaderTag: Record<TextSize, HeaderTagType> = {
  [TextSize.SizeS]: 'h3',
  [TextSize.SizeM]: 'h2',
  [TextSize.SizeL]: 'h1',
};

/**
 * Устарел, использовать новый из папки redesigned
 * @deprecated
 */
export const Text = memo(
  ({
    className,
    text,
    align = TextAlign.Left,
    title,
    theme = TextTheme.Primary,
    size = TextSize.SizeM,
    'data-testid': dataTestId = 'Text',
  }: TextProps) => {
    const HeaderTag = mapSizeToHeaderTag[size];

    return (
      <div className={classNames(classes.textWrapper, {}, [className, classes[theme], classes[align], classes[size]])}>
        {title && (
          <HeaderTag data-testid={`${dataTestId}.Header`} className={classes.title}>
            {title}
          </HeaderTag>
        )}
        {text && (
          <p data-testid={`${dataTestId}.Paragraph`} className={classes.text}>
            {text}
          </p>
        )}
      </div>
    );
  },
);
