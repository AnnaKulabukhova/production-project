import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from '@/entities/User';
import type { SidebarItemType } from '../types/sidebar';
import { getRouteAbout, getRouteArticles, getRouteMain, getRouteProfile } from '@/shared/const/router';
import AboutIconDeprecated from '@/shared/assets/icons/about.svg';
import HomeIconDeprecated from '@/shared/assets/icons/home.svg';
import ProfileIconDeprecated from '@/shared/assets/icons/profile-icon.svg';
import ArticlesIconDeprecated from '@/shared/assets/icons/articles.svg';
import AboutIcon from '@/shared/assets/icons/info-new.svg'
import HomeIcon from '@/shared/assets/icons/home-new.svg';
import ProfileIcon from '@/shared/assets/icons/profile-new.svg';
import ArticlesIcon from '@/shared/assets/icons/article-new.svg';
import { toggleFeatures } from '@/shared/lib/features';

export const getSidebarItems = createSelector(getUserAuthData, (userData) => {
  const sidebarItemsList: SidebarItemType[] = [
    {
      path: getRouteMain(),
      Icon: toggleFeatures({
        name: 'isAppRedesigned',
        on: () => HomeIcon,
        off: () => HomeIconDeprecated
      }),
      text: 'MainPage',
    },
    {
      path: getRouteAbout(),
      Icon:
        toggleFeatures({
          name: 'isAppRedesigned',
          on: () => AboutIcon,
          off: () => AboutIconDeprecated
        }),
      text: 'About',
    },
  ];

  if (userData) {
    sidebarItemsList.push(
      {
        path: getRouteProfile(userData.id),
        Icon:
          toggleFeatures({
            name: 'isAppRedesigned',
            on: () => ProfileIcon,
            off: () => ProfileIconDeprecated
          }),
        text: 'Profile',
        authOnly: true,
      },
      {
        path: getRouteArticles(),
        Icon:
          toggleFeatures({
            name: 'isAppRedesigned',
            on: () => ArticlesIcon,
            off: () => ArticlesIconDeprecated
          }),
        text: 'Articles',
        authOnly: true,
      },
    );
  }
  return sidebarItemsList;
});
