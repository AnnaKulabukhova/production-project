import { useCallback, useEffect } from 'react';
import type { ReactNode } from 'react';
import classes from './Drawer.module.scss';
import type { Mods } from '@/shared/lib/classNames/classNames';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Portal } from '../Portal';
import { Overlay } from '../Overlay';
import { AnimationProvider, useAnimationLibs } from '@/shared/lib/components/AnimationProvider';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { toggleFeatures } from '@/shared/lib/features';

interface DrawerProps {
  className?: string;
  children: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
  lazy?: boolean;
}

export const DrawerContent = ({ className, children, isOpen, onClose, lazy }: DrawerProps) => {
  const { Spring, Gesture } = useAnimationLibs();
  const { theme } = useTheme();
  const height = window.innerHeight - 100;
  const [{ y }, api] = Spring.useSpring(() => ({ y: height }));

  const open = useCallback(() => {
    api.start({ y: 0, immediate: false });
  }, [api]);

  useEffect(() => {
    if (isOpen) {
      open();
    }
  }, [isOpen, open, api]);

  const close = (velocity = 0) => {
    api.start({ y: height, immediate: false, config: { ...Spring.config.stiff, velocity }, onResolve: onClose });
  };

  const bind = Gesture.useDrag(
    ({ last, velocity: [, vy], direction: [, dy], offset: [, oy], cancel }) => {
      // oy - смещения по оси Y
      //  предотвращает закрытие шторки, если пользователь слегка смахнул её вверх.
      // срабатывает  во время того, как пользователь перемещает шторку
      if (oy < -70) cancel();
      //  принимает решение о том, что делать с шторкой, когда жест завершён, на основе положения шторки и скорости её движения. (срабатывает, когда жест уже завершен)
      // Если потянуть < 70px, то не сработает опускание шторки (open()) если > 70Px шторка закроется
      if (last) {
        oy > height * 0.5 || (vy > 0.5 && dy > 0) ? close() : open();
        // во время перетаскивания шторки, она перемещается в соответствии с положением курсора
      } else api.start({ y: oy, immediate: true });
    },
    { from: () => [0, y.get()], filterTaps: true, bounds: { top: 0 }, rubberband: true },
  );

  const display = y.to((py) => (py < height ? 'block' : 'none'));

  const mods: Mods = {
    [classes.opened]: isOpen,
  };

  const drawerVariant = toggleFeatures({
    name: 'isAppRedesigned',
    off: () => classes.drawerOld,
    on: () => classes.drawerNew
  })


  return (
    <Portal element={document.getElementById('app') ?? document.body}>
      <Spring.a.div className={classNames(classes.drawer, mods, [className, theme, 'app_drawer', drawerVariant])}>
        <Overlay onClick={() => close()} />
        <Spring.a.div style={{ display, bottom: `calc(-100vh + ${height - 100}px)`, y }} {...bind()} className={classes.sheet}>
          {children}
        </Spring.a.div>
      </Spring.a.div>
    </Portal>
  );
};

// Обертка для подгрузки библиотек
const DrawerAsync = (props: DrawerProps) => {
  const { isLoaded } = useAnimationLibs();

  if (!isLoaded) {
    return null;
  }

  return <DrawerContent {...props} />;
};

// Обертка для добавления контекста анимации
export const Drawer = (props: DrawerProps) => {
  return (
    <AnimationProvider>
      <DrawerAsync {...props} />
    </AnimationProvider>
  );
};
