import classes from './SidebarRedesigned.module.scss'
import { classNames } from "@/shared/lib/classNames/classNames"
import type { SidebarProps } from './Sidebar'
import type { SidebarItemType } from '../../model/types/sidebar'
import { AppLogo } from '@/shared/ui/deprecated/AppLogo'

export interface SidebarRedesignedProps extends SidebarProps {
  collapsed: boolean,
  onToggle: () => void
  sidebarItemList: SidebarItemType[]
}

export const SidebarRedesigned = ({ className, collapsed, onToggle, sidebarItemList }: SidebarRedesignedProps) => {

  return (
    <menu data-testid="sidebar" className={classNames(classes.sidebar, { [classes.collapsed]: collapsed }, [className])}>
      <AppLogo className={classes.logo} />
      {/* <Button
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
      </div> */}
    </menu>
  )

}