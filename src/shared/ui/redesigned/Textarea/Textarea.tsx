import { memo } from 'react'
import classes from './Textarea.module.scss'
import { classNames } from "@/shared/lib/classNames/classNames"
import TextareaAutosize from 'react-textarea-autosize';



interface TextareaProps {
  className?: string
  placeholder?: string
  bold?: boolean
  value?: string
  onChange?: (value: string) => void;
  minRows?: number
}

export const Textarea = memo(({ className, placeholder, bold, value, onChange, minRows }: TextareaProps) => {

  const onChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange?.(e.target.value);
  };


  return (
    <div className={classNames(classes.textareaWrapper, {}, [className])} >
      <TextareaAutosize
        minRows={minRows}
        className={classNames(classes.textarea, { [classes.bold]: bold })}
        placeholder={placeholder}
        value={value}
        onChange={onChangeHandler}
      />
    </div>
  )
})