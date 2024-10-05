import type { CSSProperties } from 'react';
import classes from './Skeleton.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';

interface SkeletonProps {
  className?: string;
  height?: string | number;
  width?: string | number;
  border?: string;
}

export const Skeleton = ({ className, height, width, border }: SkeletonProps) => {
  const styles: CSSProperties = {
    width,
    height,
    borderRadius: border,
  };

  return <div className={classNames(classes.skeleton, {}, [className])} style={styles} />;
};
