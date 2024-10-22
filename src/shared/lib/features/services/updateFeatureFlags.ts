import { createAsyncThunk } from '@reduxjs/toolkit';
import type { ThunkConfig } from '@/app/providers/StoreProvider';
import { updateFeatureFlagsMutation } from '../api/featureFlugsApi';
import type { FeatureFlagsType } from '@/shared/types/featureFlags';
import { getAllFeaturesFlags } from '../lib/setGetFEatures';

export interface UpdateFeatureFlagOptions {
  userId: string
  newFeatures: Partial<FeatureFlagsType>
}

export const updateFeatureFlag = createAsyncThunk<void, UpdateFeatureFlagOptions, ThunkConfig<string>>(
  'user/saveJsonSettings',
  async ({ userId, newFeatures }, thunkAPI) => {
    const { rejectWithValue, dispatch } = thunkAPI;

    try {
      await dispatch(updateFeatureFlagsMutation({
        userId,
        features: {
          ...getAllFeaturesFlags(),
          ...newFeatures
        }
      }))

      window.location.reload();
      return undefined;
    } catch (e) {
      console.log(e);
      return rejectWithValue('Error');
    }
  },
);
