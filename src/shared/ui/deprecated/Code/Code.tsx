import { memo, useCallback } from 'react';
import classes from './Code.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '../Button';
import CopyIcon from '@/shared/assets/icons/copy.svg';

interface CodeProps {
  className?: string;
  text: string;
}
/**
 * Устарел, использовать новый из папки redesigned
 * @deprecated
 */
export const Code = memo(({ className, text }: CodeProps) => {
  const onCopy = useCallback(() => {
    navigator.clipboard.writeText(text);
  }, [text]);

  return (
    <pre className={classNames(classes.code, {}, [className])}>
      <Button onClick={onCopy} className={classes.copyBtn} theme={ButtonTheme.Clear}>
        <CopyIcon className={classes.icon} />
      </Button>
      <code>{text}</code>
    </pre>
  );
});
