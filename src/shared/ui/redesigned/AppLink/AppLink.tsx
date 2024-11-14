import { classNames } from '@/shared/lib/classNames/classNames';
import classes from './AppLink.module.scss'
import type { LinkProps } from 'react-router-dom';
import { forwardRef } from 'react';
import type { ForwardedRef, ReactNode } from 'react';
import { NavLink } from 'react-router-dom';

export type AppLinkVariant = 'primary' | 'red'

interface AppLinkProps extends LinkProps {
  className?: string;
  variant?: string;
  children: ReactNode;
  activeClassName?: string
}

export const AppLink = forwardRef(({ className, children, variant = 'primary', to, activeClassName = '', ...otherProps }: AppLinkProps, ref: ForwardedRef<HTMLAnchorElement>) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => classNames(classes.appLink, { [activeClassName]: isActive }, [className, classes[variant]])} {...otherProps}
    >
      {children}
    </NavLink>
  );
});
