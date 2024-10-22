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

const App = () => {
  const { theme } = useTheme();
  const dispatch = useAppDispatch();
  const init = useSelector(getUserInit);

  useEffect(() => {
    dispatch(initAuthData());
  }, [dispatch]);

  if (!init) {
    return <PageLoader />
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
            // toolbar={<div>sghrjhrjz</div>}
            />
          </Suspense>
        </div>
      }
    />
  )

};
export default App;
