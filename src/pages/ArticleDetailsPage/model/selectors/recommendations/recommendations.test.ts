import type { StateSchema } from '@/app/providers/StoreProvider'
import { getArticleDetailsRecommendationsError, getArticleDetailsRecommendationsIsLoading } from './recommendations'

describe('recomendations.test', () => {
  test('recommendation loading', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetailsPage: {
        recommendations: {
          isLoading: true
        }
      }
    }
    expect(getArticleDetailsRecommendationsIsLoading(state as StateSchema)).toBe(true)
  })

  test('recommendation error', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetailsPage: {
        recommendations: {
          error: 'error'
        }
      }
    }
    expect(getArticleDetailsRecommendationsError(state as StateSchema)).toBe('error')
  })
})
