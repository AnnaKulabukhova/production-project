import React from "react"
import { RoutePath } from "shared/config/routeConfig/routeConfig"
import AboutIcon from "shared/assets/icons/about.svg"
import HomeIcon from "shared/assets/icons/home.svg"
import ProfileIcon from "shared/assets/icons/profile-icon.svg"
import ArticlesIcon from "shared/assets/icons/articles.svg"

export interface SidebarItemType {
  path: string
  text: string
  Icon: React.VFC<React.SVGProps<SVGSVGElement>>
  authOnly?: boolean
}

export const SidebarItemList: SidebarItemType[] = [
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
  {
    path: RoutePath.profile,
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
]
