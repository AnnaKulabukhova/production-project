import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/deprecated/Button'
import { VStack } from '@/shared/ui/deprecated/Stack'
import { SidebarItem } from '../SidebarItem/SidebarItem'
import { ThemeSwitcher } from '@/features/ThemeSwitcher'
import { LangSwitcher } from '@/features/LangSwitcher'
import classes from './Sidebar.module.scss'
import { classNames } from "@/shared/lib/classNames/classNames"
import type { SidebarProps } from './Sidebar'
import type { SidebarItemType } from '../../model/types/sidebar'

export interface DeprecatedSidebarProps extends SidebarProps {
  collapsed: boolean,
  onToggle: () => void
  sidebarItemList: SidebarItemType[]
}

export const DeprecatedSidebar = ({ collapsed, onToggle, className, sidebarItemList }: DeprecatedSidebarProps) => {
  return (
    <menu data-testid="sidebar" className={classNames(classes.sidebar, { [classes.collapsed]: collapsed }, [className])}>
      <Button
        data-testid="sidebar-toggle"
        onClick={onToggle}
        className={classes.collapsedBtn}
        theme={ButtonTheme.BackgroundInverted}
        square={true}
        size={ButtonSize.L}
      >
        {collapsed ? '>' : '<'}
      </Button>

      <VStack role="navigation" gap="8" className={classNames(classes.items)}>
        {sidebarItemList.map((item) => (
          <SidebarItem key={item.path} item={item} collapsed={collapsed} />
        ))}
      </VStack>

      <div className={classes.swithers}>
        <ThemeSwitcher />
        <LangSwitcher short={collapsed} />
      </div>
    </menu>
  )
}