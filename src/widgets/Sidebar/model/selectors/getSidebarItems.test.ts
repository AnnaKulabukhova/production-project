import type { StateSchema } from '@/app/providers/StoreProvider';
import { getSidebarItems } from './getSidebarItems';
import AboutIcon from '@/shared/assets/icons/about.svg';
import HomeIcon from '@/shared/assets/icons/home.svg';
import ProfileIcon from '@/shared/assets/icons/profile-icon.svg';
import ArticlesIcon from '@/shared/assets/icons/articles.svg';
import { getRouteAbout, getRouteArticles, getRouteMain, getRouteProfile } from '@/shared/const/router';

describe('getSidebarItems.test', () => {
  test('sidebar items for authorized user', () => {
    const state: DeepPartial<StateSchema> = {
      user: {
        authData: {
          id: '1',
          username: 'user',
        },
      },
    };
    expect(getSidebarItems(state as StateSchema)).toEqual([
      {
        path: getRouteMain(),
        Icon: HomeIcon,
        text: 'MainPage',
      },
      {
        path: getRouteAbout(),
        Icon: AboutIcon,
        text: 'About',
      },
      {
        path: state.user?.authData?.id ? getRouteProfile(state.user?.authData?.id) : null,
        Icon: ProfileIcon,
        text: 'Profile',
        authOnly: true,
      },
      {
        path: getRouteArticles(),
        Icon: ArticlesIcon,
        text: 'Articles',
        authOnly: true,
      },
    ]);
  });

  test('sidebar items for unauthorized user', () => {
    const state: DeepPartial<StateSchema> = {
      user: {},
    };
    expect(getSidebarItems(state as StateSchema)).toEqual([
      {
        path: getRouteMain(),
        Icon: HomeIcon,
        text: 'MainPage',
      },
      {
        path: getRouteAbout(),
        Icon: AboutIcon,
        text: 'About',
      },
    ]);
  });
});
