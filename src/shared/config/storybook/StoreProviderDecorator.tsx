import { Decorator } from "@storybook/react/*"
import { StateSchema, StoreProvider } from "app/providers/StoreProvider"
import { articleDetailsReducer } from "entities/Article/model/slice/articleDetailsSlice";
import { profileReducer } from "entities/Profile";
import { addCommentFormReducer } from "features/AddCommentForm/model/slice/addCommentFormSlice";
import { loginReducer } from "features/AuthByUsername/model/slice/loginSlice";
import { articleDetailsCommentsReducer } from "pages/ArticleDetailsPage/model/slices/articleDetailsCommentSlice/articleDetailsCommentSlice";
import { ReducersList } from "shared/lib/components/DynamicModuleLoading/DynamicModuleLoading";

const defaultReducers: ReducersList = {
  loginForm: loginReducer,
  profile: profileReducer,
  articleDetails: articleDetailsReducer,
  addCommentForm: addCommentFormReducer,
  articleDetailsComment: articleDetailsCommentsReducer
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