import { Decorator } from "@storybook/react/*"
import { StateSchema, StoreProvider } from "app/providers/StoreProvider"
import { profileReducer } from "entities/Profile";
import { loginReducer } from "features/AuthByUsername/model/slice/loginSlice";
import { ReducersList } from "shared/lib/components/DynamicModuleLoading/DynamicModuleLoading";

const defaultReducers: ReducersList = {
  loginForm: loginReducer,
  profile: profileReducer
}

export const StoreProviderDecorator: (
  state: DeepPartial<StateSchema>,
  asyncReducers?: ReducersList
) => Decorator = (state, asyncReducers) => (Story) => {
  return (
    <StoreProvider initialState={state as StateSchema} asyncReducers={{ ...defaultReducers, ...asyncReducers }}>
      <Story />
    </StoreProvider>
  );
};