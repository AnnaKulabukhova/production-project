import { Reducer } from "@reduxjs/toolkit"
import { ReduxStoreWithManager } from "app/providers/StoreProvider"
import { StateSchemaKey } from "app/providers/StoreProvider/config/StateSchema"
import { AppDispatch } from "app/providers/StoreProvider/config/store"
import { ReactNode, useEffect } from "react"
import { useDispatch, useStore } from "react-redux"

export type ReducersList = {
  [name in StateSchemaKey]?: Reducer
}

interface DynamicModuleLoadingProps {
  reducers: ReducersList,
  children: ReactNode,
  removeAfterUnmount?: boolean
}

export const DynamicModuleLoading = ({ removeAfterUnmount, children, reducers }: DynamicModuleLoadingProps) => {
  const store = useStore() as ReduxStoreWithManager
  const dispatch: AppDispatch = useDispatch()

  useEffect(() => {
    Object.entries(reducers).forEach(([keyName, reducer]) => {
      store.reducerManager.add(keyName as StateSchemaKey, reducer)
      dispatch({ type: `@INIT ${keyName} reducer` })
    })

    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(([keyName, reducer]) => {
          store.reducerManager.remove(keyName as StateSchemaKey)
          dispatch({ type: `@DESTROY ${keyName} reducer` })
        })

      }
    }
  }, [])

  return <>{children}</>
}