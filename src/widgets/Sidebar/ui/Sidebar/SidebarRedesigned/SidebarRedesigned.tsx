import classes from './SidebarRedesigned.module.scss'
import { classNames } from "@/shared/lib/classNames/classNames"
import { AppLogo } from '@/shared/ui/redesigned/AppLogo'
import type { SidebarProps } from '../Sidebar'
import type { SidebarItemType } from '@/widgets/Sidebar/model/types/sidebar'
import { VStack } from '@/shared/ui/redesigned/Stack'
import { SidebarItem } from '../../SidebarItem/SidebarItem'
import { ThemeSwitcher } from '@/features/ThemeSwitcher'
import { LangSwitcher } from '@/features/LangSwitcher'
import { Icon } from '@/shared/ui/redesigned/Icon'
import ArrowIcon from '@/shared/assets/icons/arrow-new.svg'

export interface SidebarRedesignedProps extends SidebarProps {
  collapsed: boolean,
  onToggle: () => void
  sidebarItemList: SidebarItemType[]
}

export const SidebarRedesigned = ({ className, collapsed, onToggle, sidebarItemList }: SidebarRedesignedProps) => {

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