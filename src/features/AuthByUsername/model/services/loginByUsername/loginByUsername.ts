import { createAsyncThunk } from "@reduxjs/toolkit"
import { ThunkConfig } from "app/providers/StoreProvider";
import { User, userActions } from "entities/User";
import { USER_LOCALSTORAGE_KEY } from "shared/const/localStorage";

interface LoginByUsernameProps {
  username: string;
  password: string
}

// Типы createAsyncThunk: 1) User - тип, который возвращается 2) тип аргументов, передаваемых в асинхр. функцию
export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, ThunkConfig<string>>(
  'login/loginByUsername',
  async ({ username, password }, thunkAPI) => {
    const { extra, dispatch, rejectWithValue } = thunkAPI

    try {
      // 1 аргумент -куда передается запрос 2)что передается в запросе

      const response = await extra.api.post<User>('/login', {
        username, password
      })

      if (!response.data) {
        throw new Error()
      }

      localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data))
      dispatch(userActions.setAuthData(response.data))

      return response.data

    } catch (e) {
      console.log(e)
      return rejectWithValue('error')
    }
  }
)