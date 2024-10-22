import type { FeatureFlagsType } from "@/shared/types/featureFlags";

let featuresFlag: FeatureFlagsType = {}

export const getFeaturesFlag = (flag: keyof FeatureFlagsType) => {
  return featuresFlag?.[flag]
}

export const getAllFeaturesFlags = () => {
  return featuresFlag
}

export const setFeaturesFlag = (newFeaturesFlag?: FeatureFlagsType) => {
  if (newFeaturesFlag) {
    featuresFlag = newFeaturesFlag
  }
}