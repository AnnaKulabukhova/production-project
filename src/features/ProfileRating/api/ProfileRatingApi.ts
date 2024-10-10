import { rtkApi } from '@/shared/api/rtkApi';

const profileRatingApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getProfileRating: build.query<void, void>({
      query: () => ({
        url: 'profile-ratings',
      }),
    }),
  }),
});

export const useProfileRating = profileRatingApi.useGetProfileRatingQuery;