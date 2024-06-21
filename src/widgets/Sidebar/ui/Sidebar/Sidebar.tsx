import { memo, useState } from "react"
import classes from './Sidebar.module.scss'
import { classNames } from "shared/lib/classNames/classNames"
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher"
import { LangSwitcher } from "shared/ui/LangSwitcher"
import { Button, ButtonSize, ButtonTheme } from "shared/ui/Button"
import { SidebarItemList } from "widgets/Sidebar/model/items"
import { SidebarItem } from "../SidebarItem/SidebarItem"

export interface SidebarProps {
  className?: string
}

export const Sidebar = memo(({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState<boolean>(false)

  const onToggle = () => {
    setCollapsed(value => !value)
  }

  return (
    <div
      data-testid="sidebar"
      className={classNames(classes.sidebar, { [classes.collapsed]: collapsed }, [className])} >

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

      <div className={classNames(classes.items)}>
        {SidebarItemList.map((item) =>
          <SidebarItem key={item.path} item={item} collapsed={collapsed} />
        )}
      </div>
      <div className={classes.swithers}>
        <ThemeSwitcher />
        <LangSwitcher short={collapsed} />
      </div>
    </div>

  )
})
