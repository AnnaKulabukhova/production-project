import type { EnhancedStore, Reducer, ReducersMapObject, UnknownAction } from '@reduxjs/toolkit';
import type { AxiosInstance } from 'axios';
import type { ArticleDetailsSchema } from '@/entities/Article';
import type { ProfileSchema } from '@/features/EditableProfileCard';
import type { UserSchema } from '@/entities/User';
import type { AddCommentFormSchema } from '@/features/AddCommentForm';
import type { LoginSchema } from '@/features/AuthByUsername';
import type { ScrollSaveSchema } from '@/features/scrollSave';
import type { ArticleDetailsPageSchema } from '@/pages/ArticleDetailsPage';
import type { ArticlesPageSchema } from '@/pages/ArticlesPage';
import type { rtkApi } from '@/shared/api/rtkApi';

export interface StateSchema {
  user: UserSchema;
  scrollSave: ScrollSaveSchema;
  [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>;

  // Асинхронные редьюсеры
  loginForm?: LoginSchema;
  profile?: ProfileSchema;
  articleDetails?: ArticleDetailsSchema;
  addCommentForm?: AddCommentFormSchema;
  articlesPage?: ArticlesPageSchema;
  articleDetailsPage?: ArticleDetailsPageSchema;
}

export type StateSchemaKey = keyof StateSchema;

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>;
  reduce: (state: StateSchema | undefined, action: UnknownAction) => StateSchema;
  add: (key: StateSchemaKey, reducer: Reducer) => void;
  remove: (key: StateSchemaKey) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager;
}

export interface ThunkExtraArg {
  api: AxiosInstance;
}

export interface ThunkConfig<T> {
  rejectValue: T;
  extra: ThunkExtraArg;
  state: StateSchema;
}
