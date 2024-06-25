import { InputHTMLAttributes, memo, useEffect, useState } from 'react'
import classes from './Input.module.scss'
import { classNames } from "shared/lib/classNames/classNames"

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readonly'>

export enum InputTheme {
  Primary = 'primary',
  Secondary = 'secondary'
}

interface InputProps extends HTMLInputProps {
  className?: string
  value?: string | number
  onChange?: (value: string) => void
  type?: string
  placeholder?: string,
  readonly?: boolean
  theme?: InputTheme
}

export const Input = memo((props: InputProps) => {
  const { className, placeholder, type = 'text', value, readonly, onChange, theme = InputTheme.Primary, ...otherProps } = props

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value)
  }

  return (
    <div className={classNames(classes.inputWrapper, { [classes.readonly]: readonly }, [className])} >

      {placeholder && (
        <div className={classNames(classes.placeholder, {}, [classes[theme]])}>
          {`${placeholder}>`}
        </div>
      )}
      <input
        className={classNames(classes.input, {}, [classes[theme]])}
        type={type}
        value={value}
        onChange={onChangeHandler}
        {...otherProps}
        readOnly={readonly}
      />
    </div>
  )
})