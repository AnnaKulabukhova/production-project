import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from 'axios'
import { User, userActions } from "entities/User";
import { USER_LOCALSTORAGE_KEY } from "shared/const/localStorage";

interface LoginByUsernameProps {
  username: string;
  password: string
}

// Типы createAsyncThunk: 1) User - тип, который возвращается 2) тип аргументов, передаваемых в асинхр. функцию
export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, { rejectValue: string }>(
  'login/loginByUsername',
  async ({ username, password }, thunkAPI) => {
    try {
      // 1 аргумент -куда передается запрос 2)что передается в запросе
      const response = await axios.post<User>('http://localhost:8000/login', {
        username, password
      })
      if (!response.data) {
        throw new Error()
      }

      localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data))
      thunkAPI.dispatch(userActions.setAuthData(response.data))

      return response.data
    } catch (e) {
      console.log(e)
      return thunkAPI.rejectWithValue('error')
    }
  }
)