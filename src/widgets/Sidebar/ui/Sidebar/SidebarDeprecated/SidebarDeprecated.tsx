import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/deprecated/Button'
import { VStack } from '@/shared/ui/redesigned/Stack'
import { SidebarItem } from '../../SidebarItem/SidebarItem'
import { ThemeSwitcher } from '@/features/ThemeSwitcher'
import { LangSwitcher } from '@/features/LangSwitcher'
import classes from './Sidebar.module.scss'
import { classNames } from "@/shared/lib/classNames/classNames"
import type { SidebarProps } from '../Sidebar'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { getSidebarItems } from '@/widgets/Sidebar/model/selectors/getSidebarItems'


export const SidebarDeprecated = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const sidebarItemList = useSelector(getSidebarItems);

  const onToggle = () => {
    setCollapsed((value) => !value);
  };

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