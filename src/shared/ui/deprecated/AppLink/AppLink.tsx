import { classNames } from '@/shared/lib/classNames/classNames';
import classes from './AppLink.module.scss';
import { Link } from 'react-router-dom';
import type { LinkProps } from 'react-router-dom';
import { memo } from 'react';
import type { ReactNode } from 'react';

export enum AppLinkTheme {
  Primary = 'primary',
  Secondary = 'secondary',
  Red = 'red',
}

interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: string;
  children: ReactNode;
}
/**
 * Устарел, использовать новый из папки redesigned
 * @deprecated
 */
export const AppLink = memo(({ className, children, theme = AppLinkTheme.Primary, to, ...otherProps }: AppLinkProps) => {
  return (
    <Link to={to} className={classNames(classes.appLink, {}, [className, classes[theme]])} {...otherProps}>
      {children}
    </Link>
  );
});
