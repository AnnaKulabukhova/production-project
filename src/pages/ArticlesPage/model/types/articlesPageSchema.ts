import { EntityState } from "@reduxjs/toolkit";
import { Article, ArticlesViews } from "entities/Article";

export interface ArticlesPageSchema extends EntityState<Article, string> {
  view: ArticlesViews
  isLoading?: boolean;
  error?: string;
}