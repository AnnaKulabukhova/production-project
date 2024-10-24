import type { HTMLAttributes, ReactNode } from 'react';
import classes from './Card.module.scss';
import type { Mods } from '@/shared/lib/classNames/classNames';
import { classNames } from '@/shared/lib/classNames/classNames';

export type CardVariant = 'normal' | 'outlined' | 'light'
export type CardPadding = '0' | '8' | '16' | '24'
export type CardBorder = '12' | '16' | '32' | '42'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode;
  variant?: CardVariant;
  max?: boolean;
  padding?: CardPadding
  border?: CardBorder
  fullHeight?: boolean
}

const mapPaddingToClass: Record<CardPadding, string> = {
  '0': 'gap_0',
  '8': 'gap_8',
  '16': 'gap_16',
  '24': 'gap_24'
}

const mapBorderToClass: Record<CardBorder, string> = {
  '12': 'border_12',
  '16': 'border_16',
  '32': 'border_32',
  '42': 'border_42',
}

export const Card = ({
  className,
  fullHeight,
  max,
  children,
  variant = 'normal',
  padding = '0',
  border = '12',
  ...otherProps
}: CardProps) => {

  const paddingClass = mapPaddingToClass[padding]
  const borderClass = mapBorderToClass[border]

  const mods: Mods = {
    [classes.max]: max,
    [classes.fullHeight]: fullHeight
  }

  const additional = [
    className,
    classes[variant],
    classes[paddingClass],
    classes[borderClass]
  ]

  return (
    <div className={classNames(classes.card, mods, additional)} {...otherProps}>
      {children}
    </div>
  );
};
