import type { ReactElement } from 'react'
import { getFeaturesFlag } from '../../lib/setGetFEatures'
import type { FeatureFlagsType } from '@/shared/types/featureFlags'

interface ToggleFeaturesProps {
  feature: keyof FeatureFlagsType
  on: ReactElement
  off: ReactElement
}

export const ToggleFeatures = ({ off, on, feature }: ToggleFeaturesProps) => {
  if (getFeaturesFlag(feature)) {
    return on
  }
  return off
}
