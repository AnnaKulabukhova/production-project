import ThemeIconDeprecated from '@/shared/assets/icons/theme-dark.svg';
import ThemeIcon from '@/shared/assets/icons/theme-new.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, ButtonTheme } from '@/shared/ui/deprecated/Button';
import { memo, useCallback } from 'react';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { saveJsonSettings } from '@/entities/User';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Icon as IconDeprecated } from '@/shared/ui/deprecated/Icon';
import { Icon } from '@/shared/ui/redesigned/Icon';
import { ToggleFeatures } from '@/shared/lib/features';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();
  const dispatch = useAppDispatch()

  const onToggleHandler = useCallback(() => {
    toggleTheme((newTheme) => {
      dispatch(saveJsonSettings({
        theme: newTheme
      }))
    })
  }, [toggleTheme, dispatch])

  return (
    <ToggleFeatures
      feature='isAppRedesigned'
      off={
        <Button
          theme={ButtonTheme.Clear}
          className={classNames('', {}, [className])}
          onClick={onToggleHandler}
        >
          <IconDeprecated Svg={ThemeIconDeprecated} inverted width={40} height={40} />
        </Button>
      }
      on={
        <Icon
          Svg={ThemeIcon}
          clickable
          onClick={onToggleHandler}
          className={classNames('', {}, [className])}
        />
      }
    />
  );
});
