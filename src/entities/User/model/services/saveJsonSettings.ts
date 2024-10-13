import { createAsyncThunk } from '@reduxjs/toolkit';
import type { ThunkConfig } from '@/app/providers/StoreProvider';
import type { JsonSettings } from '../types/jsonSettings';
import { getUserAuthData } from '../selectors/getUserAuthData/getUserAuthData';
import { getJsonSettings } from '../selectors/getJsonSettings/getJsonSettings';
import { setJsonSettingsMutation } from '../../api/userApi';

export const saveJsonSettings = createAsyncThunk<JsonSettings, JsonSettings, ThunkConfig<string>>(
  'user/saveJsonSettings',
  async (newJsonSettings, thunkAPI) => {
    const { rejectWithValue, getState, dispatch } = thunkAPI;

    const userData = getUserAuthData(getState())
    const currentSettings = getJsonSettings(getState())

    if (!userData) {
      return rejectWithValue('not found user')
    }

    try {
      const response = await dispatch(setJsonSettingsMutation({
        userId: userData.id,
        jsonSettings: {
          ...currentSettings,
          ...newJsonSettings
        }
      })).unwrap()

      console.log("newJsonSettings", newJsonSettings);


      if (!response.jsonSettings) {
        return rejectWithValue('Error')
      }

      return response.jsonSettings

    } catch (e) {
      console.log(e);
      return rejectWithValue('Error')
    }
  },
);