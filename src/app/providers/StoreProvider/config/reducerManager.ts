import { Reducer, ReducersMapObject, UnknownAction, combineReducers } from "@reduxjs/toolkit"
import { ReducerManager, StateSchema, StateSchemaKey } from "./StateSchema"
import { ReducersList } from "shared/lib/components/DynamicModuleLoading/DynamicModuleLoading"



export function createReducerManager(initialReducers: ReducersMapObject<StateSchema>): ReducerManager {
  const reducers = { ...initialReducers }
  // Создание корневого редьюсера
  let combinedReducer = combineReducers(reducers)

  // Массив хранящий названия редьюсеров для удаления
  let keysToRemove: Array<StateSchemaKey> = []

  return {
    getReducerMap: () => reducers,

    // Функция корневого редьюсера, кот. будет передана в хранилище. + если содержит названия редьюсеров, то из хранилища они удаляются
    reduce: (state: StateSchema | undefined, action: UnknownAction): StateSchema => {
      if (keysToRemove.length > 0) {
        if (state) {
          state = { ...state }
          for (let key of keysToRemove) {
            delete state[key]
          }
        }

        keysToRemove = []
      }

      // Возвращается редьюсеры без лишних ключей
      // @ts-ignore
      return combinedReducer(state, action)
    },

    // Adds a new reducer with the specified key
    add: (key: StateSchemaKey, reducer: Reducer) => {
      if (!key || reducers[key]) {
        return
      }
      reducers[key] = reducer
      combinedReducer = combineReducers(reducers)
    },

    // Removes a reducer with the specified key
    remove: (key: StateSchemaKey) => {
      if (!key || !reducers[key]) {
        return
      }
      delete reducers[key]
      keysToRemove.push(key)
      combinedReducer = combineReducers(reducers)
    }
  }
}


