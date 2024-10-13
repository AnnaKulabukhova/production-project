import type { FeatureFlagsType } from '@/shared/types/featureFlags';
import type { UserRole } from '../consts/userConsts';
import type { JsonSettings } from './jsonSettings';

export interface User {
  id: string;
  username: string;
  avatar?: string;
  roles?: UserRole[];
  features?: FeatureFlagsType,
  jsonSettings?: JsonSettings
}

export interface UserSchema {
  authData?: User;
  _init?: boolean;
}
