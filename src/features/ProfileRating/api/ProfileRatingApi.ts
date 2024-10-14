import { rtkApi } from '@/shared/api/rtkApi';

interface GetProfileRatingArgs {
  profileId: string
  userId: string
}

interface RateProfileArgs {
  profileId: string
  userId: string
  feedback?: string
  rate: number
}



const profileRatingApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getProfileRating: build.query<RateProfileArgs[], GetProfileRatingArgs>({
      query: ({ profileId, userId }) => ({
        url: '/profile-ratings',
        params: { profileId, userId }
      }),
    }),

    rateProfile: build.mutation<void, RateProfileArgs>({
      query: (arg) => ({
        method: 'POST',
        url: '/profile-ratings',
        body: arg
      }),
    }),

  }),
});

export const useGetProfileRating = profileRatingApi.useGetProfileRatingQuery;
export const useRateProfile = profileRatingApi.useRateProfileMutation;