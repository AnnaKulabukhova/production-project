import { ReducersMapObject } from "@reduxjs/toolkit";
import { Decorator } from "@storybook/react/*"
import { StateSchema, StoreProvider } from "app/providers/StoreProvider"
import { loginReducer } from "features/AuthByUsername/model/slice/loginSlice";
import { DeepPartial } from "shared/types/general";

const defaultReducers: DeepPartial<ReducersMapObject<StateSchema>> = {
  // @ts-ignore
  loginForm: loginReducer
}

export const StoreProviderDecorator: (
  state: DeepPartial<StateSchema>,
  asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
) => Decorator = (state, asyncReducers) => (Story) => {
  return (
    <StoreProvider initialState={state as StateSchema} asyncReducers={{ ...defaultReducers, ...asyncReducers }}>
      <Story />
    </StoreProvider>
  );
};