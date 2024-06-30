import { EntityState } from '@reduxjs/toolkit';
import { Comment } from 'entities/Comment';

// export interface ArticleDetailsCommentSchema {
//   ids: string[],
//   entities: Record<string, Comment>
//   isLoading?: boolean;
//   error?: string;
// }
export interface ArticleDetailsCommentSchema extends EntityState<Comment, string> {
  isLoading?: boolean;
  error?: string;
}