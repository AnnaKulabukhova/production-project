import { AboutPage } from "pages/AboutPage"
import { MainPage } from "pages/MainPage"
import { NotFoundPage } from "pages/NotFoundPage"
import { ProfilePage } from "pages/ProfilePage"
import { RouteProps } from "react-router-dom"

export type AppRoutesProps = RouteProps & {
	authOnly?: boolean
}

export enum AppRoutes {
	Main = 'main',
	About = 'about',
	Profile = 'profile',
	// Должен быть последним
	PageNotFound = 'pageNotFound'
}

export const RoutePath: Record<AppRoutes, string> = {
	[AppRoutes.Main]: '/',
	[AppRoutes.About]: '/about',
	[AppRoutes.Profile]: '/profile',
	// Должен быть последним
	[AppRoutes.PageNotFound]: '*'

}

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
	[AppRoutes.Main]: {
		path: RoutePath.main,
		element: <MainPage />
	},
	[AppRoutes.About]: {
		path: RoutePath.about,
		element: <AboutPage />
	},
	[AppRoutes.Profile]: {
		path: RoutePath.profile,
		element: <ProfilePage />,
		authOnly: true
	},

	// Должен быть последним
	[AppRoutes.PageNotFound]: {
		path: RoutePath.pageNotFound,
		element: <NotFoundPage />
	}
}