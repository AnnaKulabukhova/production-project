import { memo } from 'react';
import classes from './Icon.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';

type SvgProps = Omit<React.SVGProps<SVGSVGElement>, 'onClick'>

interface IconBaseProps extends SvgProps {
  className?: string;
  Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
}

interface NonClickableProps extends IconBaseProps {
  clickable?: false
}

interface ClickableIconBaseProps extends IconBaseProps {
  clickable?: true
  onClick?: () => void
}

type IconProps = ClickableIconBaseProps | NonClickableProps

export const Icon = memo((props: IconProps) => {
  const { className, Svg, width = 32, height = 32, clickable, ...otherProps } = props

  const icon = <Svg className={classNames(classes.icon, {}, [className])} {...otherProps} width={width} height={height} onClick={undefined} />

  if (clickable) {
    return (
      <button type="button" onClick={props.onClick} className={classes.button} style={{ width, height }}>
        {icon}
      </button>
    )
  }
  return icon
});
