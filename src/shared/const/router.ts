export enum AppRoutes {
  Main = 'main',
  About = 'about',
  Profile = 'profile',
  Articles = 'articles',
  ArticleDetails = 'article_details',
  ArticleCreate = 'article_create',
  AdminPanel = 'admin_panel',
  Forbidden = 'forbidden',
  Settings = 'settings',
  // Должен быть последним
  PageNotFound = 'pageNotFound',
}

export const getRouteMain = () => '/';
export const getRouteAbout = () => '/about';
export const getRouteProfile = (id: string) => `/profile/${id}`;
export const getRouteArticles = () => '/articles';
export const getRouteArticlesDetails = (id: string) => `/articles/${id}`;
export const getRouteArticleCreate = () => '/articles/new';
export const getRouteArticleEdit = (id: string) => `/articles/${id}/edit`;
export const getRouteAdminPanel = () => '/admin';
export const getRouteForbidden = () => '/forbidden';
export const getRouteSettings = () => '/settings';

// Текущий маршрут мапит в названия роутинга
export const AppRouteByPathPattern: Record<string, AppRoutes> = {
  [getRouteMain()]: AppRoutes.Main,
  [getRouteAbout()]: AppRoutes.About,
  [getRouteProfile(':id')]: AppRoutes.Profile,
  [getRouteArticles()]: AppRoutes.Articles,
  [getRouteArticlesDetails(':id')]: AppRoutes.ArticleDetails,
  [getRouteArticleCreate()]: AppRoutes.ArticleCreate,
  [getRouteAdminPanel()]: AppRoutes.AdminPanel,
  [getRouteSettings()]: AppRoutes.Settings,
}