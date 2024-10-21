import classes from './SidebarRedesigned.module.scss'
import { classNames } from "@/shared/lib/classNames/classNames"
import { AppLogo } from '@/shared/ui/redesigned/AppLogo'
import { VStack } from '@/shared/ui/redesigned/Stack'
import { SidebarItem } from '../../SidebarItem/SidebarItem'
import { ThemeSwitcher } from '@/features/ThemeSwitcher'
import { LangSwitcher } from '@/features/LangSwitcher'
import { Icon } from '@/shared/ui/redesigned/Icon'
import ArrowIcon from '@/shared/assets/icons/arrow-new.svg'
import type { SidebarProps } from '../Sidebar'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { getSidebarItems } from '@/widgets/Sidebar/model/selectors/getSidebarItems'

export const SidebarRedesigned = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const sidebarItemList = useSelector(getSidebarItems);

  const onToggle = () => {
    setCollapsed((value) => !value);
  };

  return (
    <menu data-testid="sidebar" className={classNames(classes.sidebar, { [classes.collapsed]: collapsed }, [className])}>
      <AppLogo className={classes.logo} size={collapsed ? 30 : 50} />
      <VStack role="navigation" gap="8" className={classNames(classes.items)}>
        {sidebarItemList.map((item) => (
          <SidebarItem key={item.path} item={item} collapsed={collapsed} />
        ))}
      </VStack>
      <div className={classes.swithers}>
        <ThemeSwitcher />
        <LangSwitcher short={collapsed} />
      </div>
      <Icon
        Svg={ArrowIcon}
        data-testid="sidebar-toggle"
        clickable
        onClick={onToggle}
        className={classes.collapsedBtn}
      />
    </menu>
  )
}