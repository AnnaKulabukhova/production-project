import type { InputHTMLAttributes } from 'react'
import { memo } from 'react'
import classes from './Input.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readonly'>

interface InputProps extends HTMLInputProps {
  className?: string
  value?: string | number
  onChange?: (value: string) => void
  type?: string
  placeholder?: string
  readonly?: boolean
}

export const Input = memo((props: InputProps) => {
  const { className, placeholder, type = 'text', value, readonly, onChange, ...otherProps } = props

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value)
  }

  return (
    <div className={classNames(classes.inputWrapper, { [classes.readonly]: readonly }, [className])} >

      {placeholder && (
        <div className={classes.placeholder}>
          {`${placeholder}>`}
        </div>
      )}

      <input
        className={classes.input}
        type={type}
        value={value}
        onChange={onChangeHandler}
        {...otherProps}
        readOnly={readonly}
      />
    </div>
  )
})
