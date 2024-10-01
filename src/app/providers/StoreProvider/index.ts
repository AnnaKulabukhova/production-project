import { StoreProvider } from './ui/StoreProvider'
import type { AppDispatch } from './config/store'
import { createReduxStore } from './config/store'
import type { StateSchema, ReduxStoreWithManager, ThunkConfig, StateSchemaKey } from './config/StateSchema'

export {
  StoreProvider,
  createReduxStore
}

export type {
  AppDispatch,
  StateSchema,
  StateSchemaKey,
  ThunkConfig,
  ReduxStoreWithManager
}
