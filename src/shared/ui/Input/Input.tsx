import { InputHTMLAttributes, memo, useEffect, useState } from 'react'
import classes from './Input.module.scss'
import { classNames } from "shared/lib/classNames/classNames"

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps {
  className?: string
  value?: string
  onChange?: (value: string) => void
  type?: string
  placeholder?: string,
}

export const Input = memo(({ className, placeholder, type = 'text', value, onChange, ...otherProps }: InputProps) => {
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value)
  }

  return (
    <div className={classNames(classes.inputWrapper, {}, [className ?? ''])} >

      {placeholder && (
        <div className={classes.placeholder}>
          {`${placeholder}>`}
        </div>
      )}
      <input className={classes.input} type={type} value={value} onChange={onChangeHandler} {...otherProps} />
    </div>
  )
})