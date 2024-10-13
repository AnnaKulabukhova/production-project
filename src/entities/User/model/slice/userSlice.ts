import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { User, UserSchema } from '../types/User';
import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localStorage';
import { setFeaturesFlag } from '@/shared/lib/features';
import { saveJsonSettings } from '../services/saveJsonSettings';
import type { JsonSettings } from '../types/jsonSettings';
import { initAuthData } from '../services/initAuthData';

const initialState: UserSchema = {
  _init: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<User>) => {
      state.authData = action.payload;
      setFeaturesFlag(action.payload.features)
      localStorage.setItem(USER_LOCALSTORAGE_KEY, action.payload.id);
    },
    logout: (state) => {
      state.authData = undefined;
      localStorage.removeItem(USER_LOCALSTORAGE_KEY);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(saveJsonSettings.fulfilled, (state, { payload }: PayloadAction<JsonSettings>) => {
        if (state.authData) {
          state.authData.jsonSettings = payload;
        }
      })
    builder.addCase(initAuthData.fulfilled, (state, { payload }: PayloadAction<User>) => {
      state.authData = payload;
      setFeaturesFlag(payload.features)
      state._init = true;

    })
    builder.addCase(initAuthData.rejected, (state) => {
      state._init = true
    })
  },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
