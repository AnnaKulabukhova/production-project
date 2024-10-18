import type { HTMLAttributes, ReactNode } from 'react';
import classes from './Card.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';

export type CardVariant = 'normal' | 'outlined'

export type CardPadding = '0' | '8' | '16' | '24'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode;
  variant?: CardVariant;
  max?: boolean;
  padding: CardPadding
}

const mapPaddingToClass: Record<CardPadding, string> = {
  '0': 'gap_0',
  '8': 'gap_8',
  '16': 'gap_16',
  '24': 'gap_24'
}

export const Card = ({ className, max, children, variant = 'normal', padding = '0', ...otherProps }: CardProps) => {

  const paddingClass = mapPaddingToClass[padding]
  return (
    <div className={classNames(classes.card, { [classes.max]: max }, [className, classes[variant], classes[paddingClass]])} {...otherProps}>
      {children}
    </div>
  );
};
