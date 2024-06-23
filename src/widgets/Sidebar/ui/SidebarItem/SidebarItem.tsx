import { useTranslation } from 'react-i18next'
import classes from './SidebarItem.module.scss'
import { classNames } from "shared/lib/classNames/classNames"
import { AppLink } from 'shared/ui/AppLink'
import { SidebarItemType } from 'widgets/Sidebar/model/items'
import { memo } from 'react'
import { useSelector } from 'react-redux'
import { getUserAuthData } from 'entities/User'


interface SidebarItemProps {
  item: SidebarItemType
  collapsed: boolean
}

export const SidebarItem = memo(({ item, collapsed }: SidebarItemProps) => {
  const { t } = useTranslation()
  const isAuth = useSelector(getUserAuthData);

  if (item.authOnly && !isAuth) {
    return null
  }

  return (
    <AppLink
      to={item.path}
      className={classNames(classes.item, { [classes.collapsed]: collapsed }, [])}
    >
      <item.Icon className={classes.icon} />
      <span className={classNames(classes.link)}>
        {t(item.text)}
      </span>
    </AppLink>
  )
})