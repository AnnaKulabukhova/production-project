import { getFeaturesFlag, setFeaturesFlag } from "@/shared/lib/features";
import type { Decorator } from "@storybook/react/*";

export const NewDesignDecorator: Decorator = (Story) => {
  setFeaturesFlag({ ...getFeaturesFlag, isAppRedesigned: true })

  return (
    <div className={`app_redesigned`}>
      <Story />
    </div>
  );
};
