import { memo, useMemo } from 'react';
import type { CSSProperties } from 'react';
import classes from './Avatar.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppImage } from '../../redesigned/AppImage';
import UserIcon from '../../../assets/icons/avatar-filled.svg';
import { Icon } from '../Icon';
import { Skeleton } from '../Skeleton';

interface AvatarProps {
  className?: string;
  src?: string;
  size?: number;
  alt?: string;
}

export const Avatar = memo(({ className, src, size = 100, alt }: AvatarProps) => {
  const styleImage = useMemo<CSSProperties>(() => {
    return {
      width: size,
      height: size,
    };
  }, [size]);

  const icon = <Icon width={size} height={size} Svg={UserIcon} />

  return (
    <AppImage
      errorFallback={icon}
      fallback={<Skeleton width={size} height={size} border="50%" />}
      style={styleImage}
      className={classNames(classes.avatar, {}, [className])}
      src={src}
      alt={alt}
    />
  );
});
