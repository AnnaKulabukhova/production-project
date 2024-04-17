import { AboutPage } from "pages/AboutPage"
import { MainPage } from "pages/MainPage"
import { NotFoundPage } from "pages/NotFoundPage"
import { RouteProps } from "react-router-dom"

export enum AppRoutes {
	Main = 'main',
	About = 'about',
	PageNotFound = 'pageNotFound'
}

export const RoutePath: Record<AppRoutes, string> = {
	[AppRoutes.Main]: '/',
	[AppRoutes.About]: '/about',
	[AppRoutes.PageNotFound]: '*'

}

export const routeConfig: Record<AppRoutes, RouteProps> = {
	[AppRoutes.Main]: {
		path: RoutePath.main,
		element: <MainPage />
	},
	[AppRoutes.About]: {
		path: RoutePath.about,
		element: <AboutPage />
	},
	[AppRoutes.PageNotFound]: {
		path: RoutePath.pageNotFound,
		element: <NotFoundPage />
	}
}