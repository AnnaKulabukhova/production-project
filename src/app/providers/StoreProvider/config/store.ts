import type { Action, ReducersMapObject } from '@reduxjs/toolkit';
import { configureStore } from '@reduxjs/toolkit';
import type { StateSchema, ThunkExtraArg } from './StateSchema';
import { userReducer } from '@/entities/User';
import { createReducerManager } from './reducerManager';
import { $api } from '@/shared/api/api';
import { scrollSavesReducer } from '@/features/scrollSave';
import { rtkApi } from '@/shared/api/rtkApi';

export const createReduxStore = (initialState?: StateSchema, asyncReducers?: ReducersMapObject<StateSchema>) => {
  const rootReducer: ReducersMapObject<StateSchema, Action<string>, StateSchema> = {
    ...asyncReducers,
    user: userReducer,
    scrollSave: scrollSavesReducer,
    [rtkApi.reducerPath]: rtkApi.reducer,
  };

  const reducerManager = createReducerManager(rootReducer);

  const extraArg: ThunkExtraArg = {
    api: $api,
  };

  const store = configureStore({
    reducer: reducerManager.reduce,
    devTools: __IS_DEV__,
    preloadedState: initialState,
    middleware: (buildGetDefaultMiddleware) =>
      buildGetDefaultMiddleware({
        thunk: {
          extraArgument: extraArg,
        },
      }).concat(rtkApi.middleware),
  });
  // @ts-expect-error It is impossible to fix the error
  store.reducerManager = reducerManager;

  return store;
};

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
