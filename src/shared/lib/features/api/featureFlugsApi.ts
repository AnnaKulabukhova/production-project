import { rtkApi } from '@/shared/api/rtkApi';
import type { FeatureFlagsType } from '@/shared/types/featureFlags';

interface UpdateFeatureFlagsType {
  userId: string
  features: Partial<FeatureFlagsType>
}

const featureFlagsApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    updateFeatureFlags: build.mutation<void, UpdateFeatureFlagsType>({
      query: ({ userId, features }) => ({
        url: `/users/${userId}`,
        method: 'PATCH',
        body: {
          features
        }
      }),
    }),
  }),
});

export const updateFeatureFlagsMutation = featureFlagsApi.endpoints.updateFeatureFlags.initiate;