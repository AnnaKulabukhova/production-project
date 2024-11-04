import { memo } from 'react'
import classes from './Textarea.module.scss'
import { classNames } from "@/shared/lib/classNames/classNames"
import TextareaAutosize from 'react-textarea-autosize';

// type HTMLTextareaProps = Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'value' | 'onChange' | 'size'>;
type TextSize = 's' | 'm' | 'l'

interface TextareaProps {
  className?: string
  placeholder?: string
  rows?: number
  height?: number | string
  bold?: boolean
  size?: TextSize
  value?: string
  onChange?: (value: string) => void;
  minRows?: number
}

export const Textarea = memo(({ className, placeholder, rows, bold, size = 'm', value, onChange, minRows }: TextareaProps) => {

  const onChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange?.(e.target.value);
  };

  const mapTextSize: Record<TextSize, string> = {
    s: classes.size_s,
    m: classes.size_m,
    l: classes.size_l,
  }


  return (
    <div className={classNames(classes.textareaWrapper, {}, [className])} >
      <TextareaAutosize
        minRows={minRows}
        className={classNames(classes.textarea, { [classes.bold]: bold }, [mapTextSize[size]])}
        placeholder={placeholder}
        value={value}
        onChange={onChangeHandler}
      />
    </div>
  )
})