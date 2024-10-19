import { Listbox as HListBox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react';
import { Fragment, useMemo } from 'react';
import type { ReactNode } from 'react';
import classes from './ListBox.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { HStack } from '../../../../redesigned/Stack';
import { Button } from '../../../Button';
import type { DropdownDirection } from '@/shared/types/ui';
import classesPopups from '../../styles/popup.module.scss';
import { mapDirectionClass } from '../../styles/consts';

interface ListBoxItem<T extends string> {
  content: ReactNode;
  value: T;
  disabled?: boolean;
}

interface ListBoxProps<T extends string> {
  className?: string;
  items: ListBoxItem<T>[];
  value?: T;
  onChange?: (value: T) => void;
  readonly?: boolean;
  label?: string;
  defaultValue?: string;
  direction?: DropdownDirection;
}

export const ListBox = <T extends string>({
  className,
  items,
  value,
  onChange,
  defaultValue,
  label,
  readonly,
  direction = 'bottom right',
}: ListBoxProps<T>) => {

  const selectedItem = useMemo(() => {
    return items.find(item => item.value === value)
  }, [items, value])

  return (
    <HStack gap="8">
      {label && <span>{`${label} > `}</span>}
      <HListBox
        disabled={readonly}
        as={'div'}
        value={value}
        onChange={onChange}
        className={classNames(classes.listbox, {}, [className, classesPopups.popup])}
      >
        <ListboxButton disabled={readonly} className={classes.trigger}>
          <Button variant='filled' disabled={readonly}>{selectedItem?.content ?? defaultValue}</Button>
        </ListboxButton>
        <ListboxOptions transition className={classNames(classes.options, {}, [mapDirectionClass[direction], classesPopups.menu])}>
          {items?.map((item) => (
            <ListboxOption
              disabled={item.disabled}
              key={item.value}
              value={item.value}
              as={Fragment}
            >
              {({ focus, selected }) => (
                <li
                  className={classNames(classes.item, {
                    [classesPopups.active]: focus,
                    [classes.disabled]: item.disabled,
                    [classes.selected]: selected
                  }, [className])}
                >
                  {selected}
                  {item.content}
                </li>
              )}
            </ListboxOption>
          ))}
        </ListboxOptions>
      </HListBox>
    </HStack>
  );
};
