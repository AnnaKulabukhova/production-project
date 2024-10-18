import { useTranslation } from 'react-i18next';
import classes from './SidebarItem.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppLink as AppLinkDeprecated, AppLinkTheme } from '@/shared/ui/deprecated/AppLink';
import type { SidebarItemType } from '../../model/types/sidebar';
import { memo } from 'react';
import { useSelector } from 'react-redux';
import { getUserAuthData } from '@/entities/User';
import { ToggleFeatures } from '@/shared/lib/features';
import { AppLink } from '@/shared/ui/redesigned/AppLink';
import { Icon } from '@/shared/ui/redesigned/Icon';

interface SidebarItemProps {
  item: SidebarItemType;
  collapsed: boolean;
}

export const SidebarItem = memo(({ item, collapsed }: SidebarItemProps) => {
  const { t } = useTranslation();
  const isAuth = useSelector(getUserAuthData);

  if (item.authOnly && !isAuth) {
    return null;
  }

  return (
    <ToggleFeatures
      feature='isAppRedesigned'
      off={
        <AppLinkDeprecated theme={AppLinkTheme.Secondary} to={item.path} className={classNames(classes.item, { [classes.collapsed]: collapsed }, [])}>
          <item.Icon className={classes.icon} />
          <span className={classNames(classes.link)}>{t(item.text)}</span>
        </AppLinkDeprecated>
      }
      on={
        <AppLink activeClassName={classes.active} to={item.path} className={classNames(classes.itemRedesigned, { [classes.collapsedRedesigned]: collapsed }, [])}>
          <Icon Svg={item.Icon} width={16} height={16} />
          <span className={classNames(classes.linkRedesigned)}>{t(item.text)}</span>
        </AppLink>
      }
    />
  );
});
