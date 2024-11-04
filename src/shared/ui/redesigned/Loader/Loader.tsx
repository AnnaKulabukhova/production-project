import { toggleFeatures } from '@/shared/lib/features';
import classes from './Loader.module.scss';
import { classNames } from '@/shared/lib/classNames/classNames';

interface LoaderProps {
  className?: string;
}

export const Loader = ({ className }: LoaderProps) => {
  const loaderStyle = toggleFeatures({
    name: 'isAppRedesigned',
    off: () => classes.loader,
    on: () => classes.loaderRedesigned
  })

  return <div className={classNames(loaderStyle, {}, [className])} />;
};
