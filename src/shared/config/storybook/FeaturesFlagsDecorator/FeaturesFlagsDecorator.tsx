import { setFeaturesFlag } from "@/shared/lib/features";
import type { FeatureFlagsType } from "@/shared/types/featureFlags";
import type { Decorator } from "@storybook/react/*";

export const FeaturesFlagsDecorator: (features: FeatureFlagsType) => Decorator = (features) => (Story) => {
  setFeaturesFlag(features)
  return (
    <Story />
  );
};
