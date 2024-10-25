import { classNames } from '@/shared/lib/classNames/classNames';
import { AppRouter } from './providers/router';
import { Navbar } from '@/widgets/Navbar';
import { Sidebar } from '@/widgets/Sidebar';
import { Suspense, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getUserInit, initAuthData } from '@/entities/User';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { PageLoader } from '@/widgets/PageLoader';
import { ToggleFeatures } from '@/shared/lib/features';
import { MainLayout } from '@/shared/layouts/MainLayout';
import { AppLoaderLayout } from '@/shared/layouts/AppLoaderLayout';

const App = () => {
  const { theme } = useTheme();
  const dispatch = useAppDispatch();
  const init = useSelector(getUserInit);

  useEffect(() => {
    if (!init) {
      dispatch(initAuthData());
    }
  }, [dispatch, init]);

  if (!init) {
    return (
      <ToggleFeatures
        feature='isAppRedesigned'
        off={<PageLoader />}
        on={
          <div id='app' className={classNames('app_redesigned', {}, [theme])}>
            <AppLoaderLayout />
          </div>
        }
      />
    )
  }

  return (
    <ToggleFeatures
      feature='isAppRedesigned'
      off={
        <div id='app' className={classNames('app', {}, [theme])}>
          <Suspense fallback="">
            <Navbar />
            <div className="content-page">
              <Sidebar />
              <AppRouter />
            </div>
          </Suspense>
        </div>
      }
      on={
        <div id='app' className={classNames('app_redesigned', {}, [theme])}>
          <Suspense fallback="">
            <MainLayout
              content={<AppRouter />}
              header={<Navbar />}
              sidebar={<Sidebar />}
            />
          </Suspense>
        </div>
      }
    />
  )

};
export default App;
