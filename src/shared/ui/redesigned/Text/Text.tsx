import { memo } from 'react';
import classes from './Text.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';

export type TextVariant = 'primary' | 'error' | 'accent'
export type TextSize = 's' | 'm' | 'l'
export type TextAlign = 'left' | 'right' | 'center'

interface TextProps {
  text?: string;
  className?: string;
  title?: string;
  variant?: TextVariant;
  align?: TextAlign;
  size?: TextSize;
  bold?: boolean;
  'data-testid'?: string;
}

type HeaderTagType = 'h1' | 'h2' | 'h3';

const mapSizeToClass: Record<TextSize, string> = {
  s: 's',
  m: 'm',
  l: 'l',
};

const mapSizeToHeaderTag: Record<TextSize, HeaderTagType> = {
  s: 'h3',
  m: 'h2',
  l: 'h1',
};


export const Text = memo(
  ({
    className,
    text,
    align = 'left',
    title,
    variant = 'primary',
    size = 'm',
    bold,
    'data-testid': dataTestId = 'Text',
  }: TextProps) => {

    const HeaderTag = mapSizeToHeaderTag[size];
    const sizeClass = mapSizeToClass[size];

    const additionalClass = [
      className,
      classes[variant],
      classes[align],
      classes[sizeClass]
    ]

    return (
      <div className={classNames(classes.textWrapper, { [classes.bold]: bold }, additionalClass)}>
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
