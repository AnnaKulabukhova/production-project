import { useMemo } from 'react'
import type { ChangeEvent } from 'react'
import classes from './Select.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'

export interface SelectOption<T extends string> {
  value: T
  content: string
}

interface SelectProps<T extends string> {
  className?: string
  label?: string
  options?: Array<SelectOption<T>>
  value?: T
  onChange?: (value: T) => void
  readonly?: boolean
}

export const Select = <T extends string>({ className, label, options, value, onChange, readonly }: SelectProps<T>) => {
  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange?.(e.target.value as T)
  }

  const optionsList = useMemo(() => {
    return options?.map((opt) => (
      <option
        className={classes.option}
        key={opt.value}
        value={opt.value}
      >
        {opt.content}
      </option>
    ))
  }, [options])

  return (
    <div className={classNames(classes.wrapper, { [classes.readonly]: readonly }, [className])} >
      {label && <span className={classes.label}>{`${label} >`}</span>}
      <select
        className={classes.select}
        value={value}
        onChange={onChangeHandler}
        disabled={readonly}
      >
        {optionsList}
      </select>
    </div>
  )
}
