import type { CSSProperties, TextareaHTMLAttributes } from 'react';
import { memo } from 'react'
import classes from './Textarea.module.scss'
import { classNames } from "@/shared/lib/classNames/classNames"

type HTMLTextareaProps = Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'value' | 'onChange' | 'size'>;
type TextSize = 's' | 'm' | 'l'

interface TextareaProps extends HTMLTextareaProps {
  className?: string
  placeholder?: string
  rows?: number
  height?: number | string
  bold?: boolean
  size?: TextSize
  value?: string | number;
  onChange?: (value: string) => void;
}

export const Textarea = memo(({ className, placeholder, rows, bold, size = 'm', height = 50, value, onChange, ...otherProps }: TextareaProps) => {

  const onChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange?.(e.target.value);
  };

  const mapTextSize: Record<TextSize, string> = {
    s: classes.size_s,
    m: classes.size_m,
    l: classes.size_l,
  }

  const styles: CSSProperties = {
    minHeight: height,
  };

  return (
    <div className={classNames(classes.textareaWrapper, {}, [className])} >
      <textarea
        className={classNames(classes.textarea, { [classes.bold]: bold }, [mapTextSize[size]])}
        placeholder={placeholder}
        rows={rows}
        style={styles}
        value={value}
        onChange={onChangeHandler}
        {...otherProps}
      />
    </div>
  )
})