import type { HTMLAttributes, ReactNode } from 'react';
import classes from './Card.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';

export enum CardTheme {
  Normal = 'normal',
  OutLined = 'outlined',
}

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode;
  theme?: CardTheme;
  max?: boolean;
}
/**
 * Устарел, использовать новый из папки redesigned
 * @deprecated
 */
export const Card = ({ className, max, children, theme = CardTheme.Normal, ...otherProps }: CardProps) => {
  return (
    <div className={classNames(classes.card, { [classes.max]: max }, [className, classes[theme]])} {...otherProps}>
      {children}
    </div>
  );
};
