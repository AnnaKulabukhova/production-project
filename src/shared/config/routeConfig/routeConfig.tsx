import { AboutPage } from "pages/AboutPage"
import { ArticleDetailsPage } from "pages/ArticleDetailsPage"
import { ArticlesPage } from "pages/ArticlesPage"
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
	Articles = 'articles',
	ArticleDetails = 'article_details',
	// Должен быть последним
	PageNotFound = 'pageNotFound'
}

export const RoutePath: Record<AppRoutes, string> = {
	[AppRoutes.Main]: '/',
	[AppRoutes.About]: '/about',
	[AppRoutes.Profile]: '/profile/', // + :id
	[AppRoutes.Articles]: '/articles',
	[AppRoutes.ArticleDetails]: '/articles/', // + :id
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
		path: `${RoutePath.profile}:id`,
		element: <ProfilePage />,
		authOnly: true
	},
	[AppRoutes.Articles]: {
		path: RoutePath.articles,
		element: <ArticlesPage />,
		authOnly: true
	},
	[AppRoutes.ArticleDetails]: {
		path: `${RoutePath.article_details}:id`,
		element: <ArticleDetailsPage />,
		authOnly: true
	},

	// Должен быть последним
	[AppRoutes.PageNotFound]: {
		path: RoutePath.pageNotFound,
		element: <NotFoundPage />
	}
}