import type { Reducer } from '@reduxjs/toolkit';
import type { StateSchema, StateSchemaKey, ReduxStoreWithManager, AppDispatch } from '@/app/providers/StoreProvider';
import { useEffect } from 'react';
import type { ReactNode } from 'react';
import { useDispatch, useStore } from 'react-redux';

export type ReducersList = {
  [name in StateSchemaKey]?: Reducer<NonNullable<StateSchema[name]>>;
};

interface DynamicModuleLoadingProps {
  reducers: ReducersList;
  children: ReactNode;
  removeAfterUnmount?: boolean;
}

export const DynamicModuleLoading = ({ removeAfterUnmount = true, children, reducers }: DynamicModuleLoadingProps) => {
  const store = useStore() as ReduxStoreWithManager;
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    const mountedReducers = store.reducerManager.getReducerMap();
    Object.entries(reducers).forEach(([keyName, reducer]) => {
      const mounted = mountedReducers[keyName as StateSchemaKey];
      if (!mounted) {
        store.reducerManager.add(keyName as StateSchemaKey, reducer);
        dispatch({ type: `@INIT ${keyName} reducer` });
      }
    });

    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(([keyName, reducer]) => {
          store.reducerManager.remove(keyName as StateSchemaKey);
          dispatch({ type: `@DESTROY ${keyName} reducer` });
        });
      }
    };
  }, [dispatch, reducers, removeAfterUnmount, store.reducerManager]);

  return <>{children}</>;
};
