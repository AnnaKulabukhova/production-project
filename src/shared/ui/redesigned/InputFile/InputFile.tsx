import type { InputHTMLAttributes } from 'react';
import { memo } from 'react';
import classes from './InputFile.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import type { Mods } from '@/shared/lib/classNames/classNames';
import { Icon } from '../Icon';

type HTMLInputFileProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readonly' | 'size'>;

interface InputFileProps extends HTMLInputFileProps {
  className?: string;
  value?: string | number;
  onChange?: (value: string) => void;
  placeholder?: string;
  readonly?: boolean;
  label?: string
  width?: number
  height?: number
  img: React.VFC<React.SVGProps<SVGSVGElement>>
}

export const InputFile = memo((props: InputFileProps) => {
  const { className, img, placeholder, value, readonly, height, width, label, onChange, ...otherProps } = props;

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  const mods: Mods = {
    [classes.readonly]: readonly,
  }


  return (
    <div className={classNames(classes.inputWrapper, mods, [className])}>
      <label>
        <input
          placeholder={placeholder}
          className={classes.input}
          type='file'
          value={value}
          onChange={onChangeHandler}
          readOnly={readonly}
          {...otherProps}
        >
        </input>
        <Icon width={width} height={height} className={classes.image} Svg={img} />
      </label>
    </div>
  )
});
