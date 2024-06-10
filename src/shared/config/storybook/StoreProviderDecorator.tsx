import { Decorator } from "@storybook/react/*"
import { StateSchema, StoreProvider } from "app/providers/StoreProvider"
import { DeepPartial } from "shared/types/general";


export const StoreProviderDecorator: (state: DeepPartial<StateSchema>) => Decorator = (state) => (Story) => {
  return (
    <StoreProvider initialState={state as StateSchema}>
      <Story />
    </StoreProvider>
  );
};