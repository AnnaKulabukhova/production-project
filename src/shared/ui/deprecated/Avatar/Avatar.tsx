import { memo, useMemo } from 'react';
import type { CSSProperties } from 'react';
import classes from './Avatar.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppImage } from '../../redesigned/AppImage';
import { Skeleton } from '../Skeleton';
import UserIcon from '../../../assets/icons/avatar-filled.svg';
import { Icon } from '../Icon';

interface AvatarProps {
  className?: string;
  src?: string;
  size?: number;
  alt?: string;
  fallbackInverted?: boolean;
}
/**
 * Устарел, использовать новый из папки redesigned
 * @deprecated
 */
export const Avatar = memo(({ className, src, size = 100, alt, fallbackInverted }: AvatarProps) => {
  const styleImage = useMemo<CSSProperties>(() => {
    return {
      width: size,
      height: size,
    };
  }, [size]);

  return (
    <AppImage
      errorFallback={<Icon width={size} height={size} Svg={UserIcon} inverted={fallbackInverted} />}
      fallback={<Skeleton width={size} height={size} border="50%" />}
      style={styleImage}
      className={classNames(classes.avatar, {}, [className])}
      src={src}
      alt={alt}
    />
  );
});
