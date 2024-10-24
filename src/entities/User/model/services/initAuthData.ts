import { createAsyncThunk } from '@reduxjs/toolkit';
import type { ThunkConfig } from '@/app/providers/StoreProvider';
import type { User } from '@/entities/User';
import { getUserDataByIdQuery } from '../../api/userApi';
import { LOCAL_STORAGE_LAST_THEME_KEY, USER_LOCALSTORAGE_KEY } from '@/shared/const/localStorage';

export const initAuthData = createAsyncThunk<User, void, ThunkConfig<string>>(
  'user/initAuthData',
  async (_, thunkAPI) => {
    const { rejectWithValue, dispatch } = thunkAPI;

    const userId = localStorage.getItem(USER_LOCALSTORAGE_KEY)

    if (!userId) {
      return rejectWithValue('not found user')
    }

    try {
      const response = await dispatch(getUserDataByIdQuery(userId)).unwrap()
      localStorage.setItem(LOCAL_STORAGE_LAST_THEME_KEY, response.features?.isAppRedesigned ? 'new' : 'old')

      return response
    } catch (e) {
      console.log(e);
      return rejectWithValue('Error')
    }
  },
);
