import { componentRender } from '@/shared/lib/tests/componentRender/componentRender';
import AppRouter from './AppRouter';
import { getRouteAbout, getRouteAdminPanel, getRouteProfile } from '@/shared/const/router';
import { screen } from '@testing-library/react';
import { UserRole } from '@/entities/User';
import { setFeaturesFlag } from '@/shared/lib/features';

beforeAll(() => {
  global.ResizeObserver = class {
    observe() { }
    unobserve() { }
    disconnect() { }
  };
});

beforeEach(() => {
  setFeaturesFlag({
    isProfileRatingEnabled: true,
  });
});

describe('AppRouter.test', () => {
  // Тест асинхр. т.к. страница подгружается асинхронно
  test('The page should be rendered', async () => {
    componentRender(<AppRouter />, {
      route: getRouteAbout(),
    });
    const page = await screen.findByTestId('AboutPage');
    expect(page).toBeInTheDocument();
  });

  test('The page not found', async () => {
    componentRender(<AppRouter />, {
      route: '/dhgghnr',
    });
    const page = await screen.findByTestId('NotFoundPage');
    expect(page).toBeInTheDocument();
  });

  test('Redirecting an unauthorized user to the main page', async () => {
    componentRender(<AppRouter />, {
      route: getRouteProfile('1'),
      initialState: { user: {} },
    });
    const page = await screen.findByTestId('MainPage');
    expect(page).toBeInTheDocument();
  });

  test('Access to a private page for an authorized user', async () => {
    componentRender(<AppRouter />, {
      route: getRouteProfile('1'),
      initialState: { user: { authData: { id: '1' } } },
    });
    const page = await screen.findByTestId('ProfilePage');
    expect(page).toBeInTheDocument();
  });

  test('Access is denied (no role)', async () => {
    componentRender(<AppRouter />, {
      route: getRouteAdminPanel(),
      initialState: { user: { authData: { id: '1', roles: [UserRole.user] } } },
    });
    const page = await screen.findByTestId('ForbiddenPage');
    expect(page).toBeInTheDocument();
  });

  test('Access is allowed (the role is present)', async () => {
    componentRender(<AppRouter />, {
      route: getRouteAdminPanel(),
      initialState: { user: { authData: { id: '1', roles: [UserRole.admin] } } },
    });
    const page = await screen.findByTestId('AdminPanelPage');
    expect(page).toBeInTheDocument();
  });
});
