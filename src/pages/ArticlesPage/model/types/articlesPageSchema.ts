import type { EntityState } from '@reduxjs/toolkit';
import type { Article, ArticlesViews, ArticleSortField, ArticleType } from '@/entities/Article';

import type { SortOrder } from '@/shared/types/sort';

export interface ArticlesPageSchema extends EntityState<Article, string> {
  isLoading?: boolean;
  error?: string;

  _init: boolean;

  // Фильтры
  view: ArticlesViews;
  order: SortOrder;
  sort: ArticleSortField;
  search: string;
  type: ArticleType;

  // Пагинация - подгрузка данных на страницу порциями
  page: number;
  limit: number;
  hasMore: boolean;
}
