import { EntityState } from "@reduxjs/toolkit";
import { Article, ArticlesViews } from "entities/Article";

export interface ArticlesPageSchema extends EntityState<Article, string> {
  view: ArticlesViews
  isLoading?: boolean;
  error?: string;

  // Пагинация - подгрузка данных на страницу порциями
  page: number,
  limit?: number
  hasMore: boolean
}