import { Suspense, memo, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import type { AppRoutesProps } from '@/shared/types/router';
import { routeConfig } from '../config/routeConfig';
import { PageLoader } from '@/widgets/PageLoader';
import { RequireAuth } from './RequireAuth';

const AppRouter = () => {
  const renderWithWrapper = useCallback((route: AppRoutesProps) => {
    const element = <Suspense fallback={<PageLoader />}>{route.element}</Suspense>;

    return (
      <Route
        key={route.path}
        path={route.path}
        element={route.authOnly ? <RequireAuth roles={route.roles}>{element}</RequireAuth> : element}
      />
    );
  }, []);

  return <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>;
};

export default memo(AppRouter);
