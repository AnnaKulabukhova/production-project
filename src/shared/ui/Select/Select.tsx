import { ChangeEvent, memo, useMemo } from 'react'
import classes from './Select.module.scss'
import { classNames } from "shared/lib/classNames/classNames"

export interface SelectOption {
  value: string
  content: string
}

interface SelectProps {
  className?: string
  label?: string
  options?: SelectOption[]
  value?: string
  onChange?: (value: string) => void
  readonly?: boolean
}

export const Select = memo(({ className, label, options, value, onChange, readonly }: SelectProps) => {

  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange?.(e.target.value)
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
})