import { ReducersMapObject, configureStore } from '@reduxjs/toolkit'
import { StateSchema, ThunkExtraArg } from './StateSchema'
import { counterReducer } from 'entities/Counter/model/slice/counterSlice'
import { userReducer } from 'entities/User'
import { createReducerManager } from './reducerManager'
import { $api } from 'shared/api/api'
import { NavigateOptions, To } from 'react-router-dom'


export const createReduxStore = (
  initialState?: StateSchema,
  asyncReducers?: ReducersMapObject<StateSchema>,
  navigate?: (to: To, options?: NavigateOptions) => void
) => {
  const rootReducer: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    counter: counterReducer,
    user: userReducer,
  }

  const reducerManager = createReducerManager(rootReducer)

  const extraArg: ThunkExtraArg = {
    api: $api,
    navigate
  }

  const store = configureStore({
    reducer: reducerManager.reduce,
    devTools: __IS_DEV__,
    preloadedState: initialState,
    middleware: buildGetDefaultMiddleware => buildGetDefaultMiddleware({
      thunk: {
        extraArgument: extraArg
      }
    })
  })
  // @ts-ignore
  store.reducerManager = reducerManager

  return store
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];


