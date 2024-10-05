import type { Reducer, ReducersMapObject, UnknownAction } from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit';
import type { ReducerManager, StateSchema, StateSchemaKey } from './StateSchema';

export function createReducerManager(initialReducers: ReducersMapObject<StateSchema>): ReducerManager {
  const reducers = { ...initialReducers };
  // Создание корневого редьюсера
  let combinedReducer = combineReducers(reducers);

  // Массив хранящий названия редьюсеров для удаления
  let keysToRemove: StateSchemaKey[] = [];

  return {
    getReducerMap: () => reducers,

    // Функция корневого редьюсера, кот. будет передана в хранилище. + если содержит названия редьюсеров, то из хранилища они удаляются
    reduce: (state: StateSchema | undefined, action: UnknownAction): StateSchema => {
      if (keysToRemove.length > 0) {
        if (state) {
          state = { ...state };
          for (const key of keysToRemove) {
            // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
            delete state[key];
          }
        }

        keysToRemove = [];
      }

      // Возвращается редьюсеры без лишних ключей
      // @ts-expect-error It is impossible to fix the error
      return combinedReducer(state, action);
    },

    // Adds a new reducer with the specified key
    add: (key: StateSchemaKey, reducer: Reducer) => {
      if (!key || reducers[key]) {
        return;
      }
      reducers[key] = reducer;
      combinedReducer = combineReducers(reducers);
    },

    // Removes a reducer with the specified key
    remove: (key: StateSchemaKey) => {
      if (!key || !reducers[key]) {
        return;
      }
      // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
      delete reducers[key];
      keysToRemove.push(key);
      combinedReducer = combineReducers(reducers);
    },
  };
}
