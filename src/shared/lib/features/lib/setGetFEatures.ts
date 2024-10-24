import { LOCAL_STORAGE_LAST_THEME_KEY } from "@/shared/const/localStorage";
import type { FeatureFlagsType } from "@/shared/types/featureFlags";

const defaultFeatures: FeatureFlagsType = {
  isAppRedesigned: localStorage.getItem(LOCAL_STORAGE_LAST_THEME_KEY) === 'new'
}

let featuresFlag: FeatureFlagsType = {
  ...defaultFeatures
}

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