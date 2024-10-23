import { memo, useCallback } from 'react';
import classes from './Code.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '../../deprecated/Button';
import CopyIconDeprecated from '@/shared/assets/icons/copy.svg';
import CopyIcon from '@/shared/assets/icons/copy-new.svg';
import { ToggleFeatures } from '@/shared/lib/features';
import { Icon } from '../Icon';

interface CodeProps {
  className?: string;
  text: string;
}

export const Code = memo(({ className, text }: CodeProps) => {
  const onCopy = useCallback(() => {
    navigator.clipboard.writeText(text);
  }, [text]);

  return (
    <ToggleFeatures
      feature='isAppRedesigned'
      off={
        <pre className={classNames(classes.code, {}, [className])}>
          <Button onClick={onCopy} className={classes.copyBtn} theme={ButtonTheme.Clear}>
            <CopyIconDeprecated className={classes.icon} />
          </Button>
          <code>{text}</code>
        </pre>
      }
      on={
        <pre className={classNames(classes.codeRedesigned, {}, [className])}>
          <Icon clickable onClick={onCopy} className={classes.copyBtn} Svg={CopyIcon} />
          <code>{text}</code>
        </pre>
      }
    />
  )
})
