import { memo } from 'react';
import classes from './Icon.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
  Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
  inverted?: boolean;
}
/**
 * Устарел, использовать новый из папки redesigned
 * @deprecated
 */
export const Icon = memo(({ className, Svg, inverted, ...otherProps }: IconProps) => {
  return <Svg className={classNames(inverted ? classes.invertedIcon : classes.icon, {}, [className])} {...otherProps} />;
});
