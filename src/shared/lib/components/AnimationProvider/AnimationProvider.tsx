import { createContext, useContext, useEffect, useMemo, useRef, useState } from 'react';
import type { ReactNode } from 'react';

// Вывести типы из библиотек, для правильной работы типизации
type SpringType = typeof import('@react-spring/web');
type GestureType = typeof import('@use-gesture/react');

interface AnimationContextPayload {
  Spring?: SpringType;
  Gesture?: GestureType;
  // true - когда библиотеки подгружены
  isLoaded?: boolean;
}

const AnimationContext = createContext<AnimationContextPayload>({});

// асинхронная подгрузка библиотек (импорт со скобками,работает с промисами)
const getAsyncAnimationModules = () => {
  return Promise.all([import('@react-spring/web'), import('@use-gesture/react')]);
};

export const useAnimationLibs = () => {
  return useContext(AnimationContext) as Required<AnimationContextPayload>;
};

export const AnimationProvider = ({ children }: { children: ReactNode }) => {
  // Внутрь ref складываются сами библиотеки. UseRef нужен для того чтобы доступ к значениям во время рендера без лишних перерисовок
  const SpringRef = useRef<SpringType>();
  const GestureRef = useRef<GestureType>();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    getAsyncAnimationModules().then(([Spring, Gesture]) => {
      SpringRef.current = Spring;
      GestureRef.current = Gesture;
      setIsLoaded(true);
    });
  }, []);

  const value = useMemo(
    () => ({
      Gesture: GestureRef.current,
      Spring: SpringRef.current,
      isLoaded,
    }),
    [isLoaded],
  );

  return <AnimationContext.Provider value={value}>{children}</AnimationContext.Provider>;
};
