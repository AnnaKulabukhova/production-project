import { Fragment, memo } from 'react';
import type { ReactNode } from 'react';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import classes from './Dropdown.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppLink } from '../../../AppLink';
import classesPopups from '../../styles/popup.module.scss';
import type { DropdownDirection } from '@/shared/types/ui';
import { mapDirectionClass } from '../../styles/consts';

export interface DropdownItem {
  content: ReactNode;
  disabled?: boolean;
  onClick?: () => void;
  href?: string;
}

interface DropdownProps {
  className?: string;
  items: DropdownItem[];
  trigger: ReactNode;
  direction?: DropdownDirection;
}

export const Dropdown = memo(({ className, items, trigger, direction = 'bottom right' }: DropdownProps) => {
  return (
    <Menu as={'div'} className={classNames(classes.dropdown, {}, [className, classesPopups.popup])}>
      <MenuButton className={classesPopups.trigger}>{trigger}</MenuButton>
      <MenuItems className={classNames(classes.menu, {}, [mapDirectionClass[direction]])}>
        {items.map((item, index) => {
          const content = ({ focus }: { focus: boolean }) => (
            <button
              disabled={item.disabled}
              type="button"
              onClick={item.onClick}
              className={classNames(classes.item, { [classesPopups.active]: focus }, [className])}
            >
              {item.content}
            </button>
          );

          if (item.href) {
            return (
              <MenuItem key={index} disabled={item.disabled} as={AppLink} to={item.href}>
                {content}
              </MenuItem>
            );
          }

          return (
            <MenuItem key={index} disabled={item.disabled} as={Fragment}>
              {content}
            </MenuItem>
          );
        })}
      </MenuItems>
    </Menu>
  );
});
