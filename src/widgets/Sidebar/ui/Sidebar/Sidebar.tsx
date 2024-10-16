import { memo, useState } from 'react';
import { useSelector } from 'react-redux';
import { getSidebarItems } from '../../model/selectors/getSidebarItems';
import { ToggleFeatures } from '@/shared/lib/features';
import type { SidebarItemType } from '../../model/types/sidebar';
import { SidebarRedesigned } from './SidebarRedesigned';
import { DeprecatedSidebar } from './DeprecatedSidebar';

export interface SidebarProps {
  className?: string;
}

export interface DeprecatedSidebarProps extends SidebarProps {
  collapsed: boolean,
  onToggle: () => void
  sidebarItemList: SidebarItemType[]
}

export const Sidebar = memo(({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const sidebarItemList = useSelector(getSidebarItems);

  const onToggle = () => {
    setCollapsed((value) => !value);
  };

  return (
    <ToggleFeatures
      feature='isAppRedesigned'
      off={<DeprecatedSidebar collapsed={collapsed} onToggle={onToggle} className={className} sidebarItemList={sidebarItemList} />}
      on={<SidebarRedesigned collapsed={collapsed} onToggle={onToggle} className={className} sidebarItemList={sidebarItemList} />}
    />
  )
});
