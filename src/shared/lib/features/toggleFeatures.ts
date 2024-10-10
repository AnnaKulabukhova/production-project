import type { FeatureFlagsType } from "@/shared/types/featureFlags"
import { getFeaturesFlag } from "./setGetFEatures"

interface ToggleFeaturesOptions<T> {
  name: keyof FeatureFlagsType
  on: () => T
  off: () => T,
}

export const toggleFeatures = <T>({ name, off, on }: ToggleFeaturesOptions<T>): T => {
  if (getFeaturesFlag(name)) {
    return on()
  }
  return off()
}
