import { createSelector } from "@reduxjs/toolkit";
import { getUserAuthData } from "entities/User";
import { SidebarItemType } from "../types/sidebar";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import AboutIcon from "shared/assets/icons/about.svg"
import HomeIcon from "shared/assets/icons/home.svg"
import ProfileIcon from "shared/assets/icons/profile-icon.svg"
import ArticlesIcon from "shared/assets/icons/articles.svg"

export const getSidebarItems = createSelector(getUserAuthData,
  (userData) => {
    const sidebarItemsList: SidebarItemType[] = [
      {
        path: RoutePath.main,
        Icon: HomeIcon,
        text: 'MainPage'
      },
      {
        path: RoutePath.about,
        Icon: AboutIcon,
        text: 'About'
      },

    ]

    if (userData) {
      sidebarItemsList.push(
        {
          path: RoutePath.profile + userData.id,
          Icon: ProfileIcon,
          text: 'Profile',
          authOnly: true
        },
        {
          path: RoutePath.articles,
          Icon: ArticlesIcon,
          text: 'Articles',
          authOnly: true
        },
      )
    }
    return sidebarItemsList
  }
)

