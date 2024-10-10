import type { FeatureFlagsType } from '@/shared/types/featureFlags';
import type { UserRole } from '../consts/userConsts';

export interface User {
  id: string;
  username: string;
  avatar?: string;
  roles?: UserRole[];
  features?: FeatureFlagsType
}

export interface UserSchema {
  authData?: User;
  _init?: boolean;
}
